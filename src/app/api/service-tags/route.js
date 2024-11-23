import data from "@/data/service-tags";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(data);
};
