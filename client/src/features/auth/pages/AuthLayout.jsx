import Login from "./Login";
import Register from "./Register";

const AuthLayout = ({ mode = "login" }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#171615] text-white">
      {mode === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default AuthLayout;
