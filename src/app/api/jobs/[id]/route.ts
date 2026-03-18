import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Get job ${params.id}` });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Update job ${params.id}` });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Delete job ${params.id}` });
}
