import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  subject: z.string().min(2).max(120),
  message: z.string().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    console.log("[contact] new enquiry", { name: data.name, email: data.email, subject: data.subject });
    
    try {
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit to backend');
      }

      return { ok: true as const, message: `Thanks ${data.name}, your message is in. I reply within 24 hours.` };
    } catch (error) {
      console.error("[contact] backend error", error);
      throw new Error("Failed to submit contact message");
    }
  });
