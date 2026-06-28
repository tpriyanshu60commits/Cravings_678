import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    role: "Customer",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", registerData);

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!registerData.terms) {
      alert("Please accept the Terms & Conditions");
      return;
    }

    const payload = {
      role: registerData.role,
      fullName: registerData.fullName,
      email: registerData.email.toLowerCase(),
      phone: registerData.phone,
      password: registerData.password,
    };
    

    console.log("Payload:", payload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-orange-400 flex justify-center items-center">
      <div className="w-[450px] bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Join as Customer, Restaurant or Rider
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-medium block mb-2">
              Register As
            </label>

            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Customer"
                  checked={registerData.role === "Customer"}
                  onChange={handleChange}
                />{" "}
                Customer
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Restaurant"
                  checked={registerData.role === "Restaurant"}
                  onChange={handleChange}
                />{" "}
                Restaurant
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Rider"
                  checked={registerData.role === "Rider"}
                  onChange={handleChange}
                />{" "}
                Rider
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center gap-2 mb-5">
            <input
              type="checkbox"
              name="terms"
              checked={registerData.terms}
              onChange={handleChange}
            />

            <label>
              I agree to the{" "}
              <span className="text-orange-600 font-medium">
                Terms & Conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span className="text-orange-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;