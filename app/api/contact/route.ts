import { sendContactEmail } from "@/lib/send-contact-email";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  packageId?: string | null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const packageId = body.packageId ?? null;

  if (!name) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email" }, { status: 400 });
  }

  if (!phone) {
    return Response.json({ error: "Phone is required" }, { status: 400 });
  }

  if (!message) {
    return Response.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    await sendContactEmail({
      name,
      email,
      phone,
      message,
      packageId,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json(
      { error: "Unable to send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
