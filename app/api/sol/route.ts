import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/util/dbConnect";
import { solSchema } from "../../models/dbSchema";
import voteAssign from "@/app/util/voteAssign";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await dbConnect();
    const { bullish, bearish } = body;
    const { bull, bear } = voteAssign(bullish, bearish);
    await solSchema.updateOne({
      $inc: {
        bullish: bull,
        bearish: bear,
      },
    });
    return NextResponse.json({ msg: "created successfully" });
  } catch (e) {
    return NextResponse.json({ Error: e });
  }
}
