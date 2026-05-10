import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthLayout = ({ mode = initialMode }) => {
  // const [switch, setSwitch] = useState(initialMode || "login");

  return <div className="h-full w-full">{mode === "login" ? <Login /> : <Register />}</div>;
};

export default AuthLayout;
