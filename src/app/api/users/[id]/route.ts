import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Get user ${params.id}` });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Update user ${params.id}` });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Delete user ${params.id}` });
}
