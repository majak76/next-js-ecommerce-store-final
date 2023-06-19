import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createProduct,
  getProductsWithLimitAndOffsetBySessionToken,
  products,
} from '../../../database/products';
import { getValidSessionByToken } from '../../../database/sessions';

export type Product = {
  id: number;
  firstName: string;
  type: string;
  accessory: string | null;
};

export type Error = {
  error: string;
};

type ProductsResponseBodyGet = { animals: Product[] } | Error;
type ProductsResponseBodyPost = { animal: Product } | Error;

const productSchema = z.object({
  firstName: z.string(),
  type: z.string(),
  accessory: z.string().optional(),
});

export async function GET(
  request: NextRequest,
): Promise<NextResponse<ProductsResponseBodyGet>> {
  const { searchParams } = new URL(request.url);

  // 1. get the token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the token has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  console.log('This comes from the API', session);

  if (!session) {
    return NextResponse.json(
      {
        error: 'session token is not valid',
      },
      { status: 401 },
    );
  }

  const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));

  if (!limit || !offset) {
    return NextResponse.json(
      {
        error: 'Limit and Offset need to be passed as params',
      },
      { status: 400 },
    );
  }

  // query the database to get all the animals only if a valid session token is passed
  const animals = await getProductsWithLimitAndOffsetBySessionToken(
    limit,
    offset,
    sessionTokenCookie.value,
  );

  return NextResponse.json({ animals: animals });
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ProductsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = productSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const product = await createProduct(
    result.data.firstName,
    result.data.type,
    result.data.text,
  );

  if (!product) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new product',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    product: product,
  });
}
