import React, { useState } from "react";

const AuthLayout = ({ mode = initialMode }) => {
  const [mode, setMode] = useState(initialMode || "login");

  return <div className="h-full w-full">{mode === "login" ? <Login /> : <Register />}</div>;
};

export default AuthLayout;
