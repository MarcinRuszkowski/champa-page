import React from "react";
import { Form } from "@/components/Form";
import { EmailData, sendEmail } from "@/API/send-email";

export const ContactPage: React.FC = () => {
  const handleEmailSubmit = async (data: EmailData): Promise<void> => {
    try {
      const result = await sendEmail(data);
      alert(result.message);
    } catch (err) {
      console.error(err);

      alert("ERROR");
    }
  };

  return <Form onSubmit={handleEmailSubmit} />;
};
