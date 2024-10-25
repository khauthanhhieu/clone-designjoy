import data from "@/data/marquees";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(data);
};
