import { submitContactForm } from "@/lib/api";
import { ContactFormData, ContactResponse } from "@/types/api";

export const contactService = {
  async submitForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await submitContactForm(data);
      return response;
    } catch (error) {
      console.error("Contact form submission error:", error);
      return {
        success: false,
        message: "An error occurred. Please try again later.",
      };
    }
  },
};
