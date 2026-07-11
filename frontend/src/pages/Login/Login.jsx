import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg p-3 mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg p-3 mb-6"
      />

      <button className="w-full bg-[#0F2D6B] text-white py-3 rounded-lg hover:bg-[#0F2D6B]">
        Login
      </button>

      <p className="text-center mt-5 text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[#0F2D6B] font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
