import data from "@/data/slider-items";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(data);
};
 