import { ContactFormData, ContactResponse } from "@/types/api";

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, this would be a real API call
  console.log("Contact form submitted:", data);

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!",
  };
}

export async function getBlogPosts() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [];
}
