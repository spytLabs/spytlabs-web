import { NextResponse } from "next/server";

type ContactPayload = {
  fname?: string;
  lname?: string;
  email?: string;
  description?: string;
  website?: string;
  phone_number?: string;
};

export async function POST(request: Request) {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!endpoint) {
    return NextResponse.json(
      { message: "Contact endpoint is not configured." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: payload.fname ?? "",
      lname: payload.lname ?? "",
      email: payload.email ?? "",
      description: payload.description ?? "",
      website: payload.website ?? "",
      phone_number: payload.phone_number ?? "",
    }),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "Upstream request failed.");
    return NextResponse.json(
      { message },
      { status: response.status || 502 },
    );
  }

  return NextResponse.json({ message: "OK" }, { status: 200 });
}