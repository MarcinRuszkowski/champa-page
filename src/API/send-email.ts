export interface EmailData {
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (
  data: EmailData
): Promise<{ message: string }> => {
  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
