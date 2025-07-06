import React from "react";

type ErrorProps = {
  message: string;
};

const ErrorAlert: React.FC<ErrorProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-red-100 text-red-800 p-3 rounded-md mt-4 border border-red-300">
      🚫 <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorAlert;
