import React, { useState } from "react";
import { Form } from "@/components/Form";
import { EmailData, sendEmail } from "@/API/send-email";
import { Alert } from "@/components/Alert";

export const ContactPage: React.FC = () => {
  const [alertText, setAlertText] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleEmailSubmit = async (data: EmailData): Promise<void> => {
    try {
      const result = await sendEmail(data);
      setAlertText(result.message);
      setAlertType("success");
      setTimeout(() => setAlertText(null), 3000); // Clear alert after 3 seconds
    } catch {
      setAlertText("Coś poszło nie tak... Spróbuj ponownie.");
      setAlertType("error");
      setTimeout(() => setAlertText(null), 3000); // Clear alert after 3 seconds
    }
  };

  return (
    <div className="relative">
      <Form onSubmit={handleEmailSubmit} />
      <div className="absolute top-14 left-10">
        <Alert text={alertText} type={alertType} />
      </div>
    </div>
  );
};
