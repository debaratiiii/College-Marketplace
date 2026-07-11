import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Register</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="w-full bg-[#0F2D6B] text-white py-3 rounded-lg hover:bg-[#0F2D6B]">
          Register
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0F2D6B] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
