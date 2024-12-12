import React, { useState } from "react";
import champa_form from "@/assets/champ_form.png";

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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-5 rounded-lg bg-mDark p-5 text-mPrimary w-[350px]"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="ml-1 font-medium text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-mDarkHover rounded-lg px-3 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="ml-1 font-medium text-lg">
            Tytuł
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="bg-mDarkHover rounded-lg px-3 py-1 w-full"
            placeholder="Reprodukcja"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="ml-1 font-medium text-lg">
            Treść
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-mDarkHover rounded-lg px-3 py-1 h-[100px] max-h-[200px] w-full"
            placeholder="Jestem zainteresowana reprodukcją..."
          />
        </div>
        <button
          type="submit"
          className="bg-mPurple rounded-lg py-1 font-medium"
        >
          Wyślij
        </button>
      </form>
      <img src={champa_form} className="rounded-e-xl" />
    </div>
  );
};
