import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

type Error = {
  error: string;
};

export type RatingResponseBody =
  | {
      rating: {
        userId: number;
        productIdValue: number;
        starValue: number;
      };
    }
  | Error;

const userSchema = z.object({
  userId: z.number(),
  productIdValue: z.number(),
  starValue: z.number(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RatingResponseBody>> {
  const body = await request.json();

  // 1. get the credentials from the body
  const result = userSchema.safeParse(body);

  // 2. verify the user data and check that the name is not taken
  if (!result.success) {
    return NextResponse.json(
      {
        error: 'Rating Values is wrong',
      },
      { status: 400 },
    );
  }

  // After all the data is verified, this is the time to send the ratings to the ratings
  // Table in your database
  // It could be something like th code below
  // const ratings = await createRatings(
  //   result.data.userId,
  //   result.data.productIdValue,
  //   result.data.starValue
  // );

  // And then the ratings will be the response you will return from line 55 to 57 below

  return NextResponse.json({
    rating: {
      userId: result.data.userId,
      productIdValue: result.data.productIdValue,
      starValue: result.data.starValue,
    },
  });
}
