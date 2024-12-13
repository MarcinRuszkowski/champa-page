import React, { useState } from "react";
import champa_form from "@/assets/champ_form.png";
import {Iphone15Pro} from "./ui/iphone-15-pro";

type FormProps = {
  onSubmit: (data: { email: string; subject: string; message: string }) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !subject || !message) {
      setError("Wszystkie pola są wymagane.");
      return;
    }

    if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
      setError("Nieprawidłowy adres email.");
      return;
    }

    onSubmit({ email, subject, message });
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="flex items-end justify-center">
      <Iphone15Pro className="w-auto h-[550px]">
        <div className="flex flex-col items-center justify-center gap-10 bg-mDark  text-mPrimary w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center  gap-8"
        >
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="ml-1 font-medium text-3xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-mDarkHover rounded-lg px-3 py-1 w-full text-2xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="ml-1 font-medium text-3xl">
              Tytuł
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-mDarkHover rounded-lg px-3 py-1 w-full text-2xl"
              placeholder="Reprodukcja"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="ml-1 font-medium text-3xl">
              Treść
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-mDarkHover rounded-lg px-3 py-1 h-[100px] max-h-[200px] w-full text-2xl"
              placeholder="Jestem zainteresowana reprodukcją..."
            />
          </div>
        </form>
          <button
            type="submit"
            className="bg-mPurple rounded- py-3 px-5 font-medium text-2xl w-fit"
          >
            Wyślij
          </button>
        </div>
      </Iphone15Pro>
      <img src={champa_form} className="rounded-e-xl" />
    </div>
  );
};
