import React from "react";
import { Form } from "@/components/Form";

export const ContactPage: React.FC = () => {
  const handleEmailSubmit = (data: {
    email: string;
    subject: string;
    message: string;
  }) => {
    return data;
  };

  return (
    <div className="">
      <Form onSubmit={handleEmailSubmit} />
    </div>
  );
};
