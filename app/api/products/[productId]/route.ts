import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getProductById,
  products,
  updateProductById,
} from '../../../../database/products';
import { Error, Product } from '../route';

type ProductResponseBodyGet = { product: Product } | Error;
type ProductResponseBodyDelete = { product: Product } | Error;
type ProductResponseBodyPut = { product: Product } | Error;

const productSchema = z.object({
  firstName: z.string(),
  price: z.number(),
  type: z.string(),
  text: z.string().optional(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, number, string | string[]> },
): Promise<NextResponse<ProductResponseBodyGet>> {
  const productId = Number(params.productId);

  if (!productId) {
    return NextResponse.json(
      {
        error: 'Product id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const product = await getProductById(productId);

  if (!product) {
    return NextResponse.json(
      {
        error: 'Product Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ product: product });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, number, string | string[]> },
): Promise<NextResponse<ProductResponseBodyDelete>> {
  const productId = Number(params.productId);

  if (!productId) {
    return NextResponse.json(
      {
        error: 'Product id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const animal = await deleteProductById(productId);

  if (!animal) {
    return NextResponse.json(
      {
        error: 'Product Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ product: products });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<ProductResponseBodyPut>> {
  const animalId = Number(params.animalId);
  const body = await request.json();

  if (!animalId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  }

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
  // query the database to update the animal
  const animal = await updateProductById(
    animalId,
    result.data.price,
    result.data.firstName,
    result.data.type,
    result.data.text,
  );

  if (!products) {
    return NextResponse.json(
      {
        error: 'Product Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    animal: animal,
  });
}
