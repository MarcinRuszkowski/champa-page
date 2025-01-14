import React from "react";

type AlertProps = {
  text: string | null;
  type: "success" | "error" | null;
};

export const Alert: React.FC<AlertProps> = ({ text, type }) => {
  if (!text || !type) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`px-3 py-1 text-mPrimary ${bgColor} rounded-lg`}>
      {text}
    </div>
  );
};
