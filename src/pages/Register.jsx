import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const backendUrl = "http://54.95.151.58:8000/";

function Register() {
    const navigate = useNavigate();

    const [name, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ phone: '', password: '' });

    const handleSubmit = async (e) => {
      e.preventDefault();

      let formIsValid = true;
      const newErrors = { phone: '', password: '' };

      if (!phone) {
          formIsValid = false;
          newErrors.phone = 'Phone number is required';
      }

      if (!password) {
          formIsValid = false;
          newErrors.password = 'Password is required';
      }

      setErrors(newErrors);

      if (formIsValid) {
        try {
            const response = await fetch(`${backendUrl}register`, {
              method: "POST",
              body: JSON.stringify({ username: name ,phone_number: phone, password: password }),
            });
      
            const result = await response.json();
            if (response.ok) {
              alert("User Registered Successfully!");
              navigate("/"); // Navigate to Success Page after submission
            } else {
              alert(`Error: ${result.detail}`);
            }
          } catch (error) {
            console.error("Registration failed", error);
            alert("Failed to register user.");
          }
      }
  };

    return (
        <div className="min-h-screen flex items-center justify-center w-full absolute inset-0 bg-cover bg-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', /* Dark overlay color */
        backgroundBlendMode: 'overlay'}}>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 px-10 py-4 bg-transparent flex justify-between items-center">
                <div className="text-4xl font-bold text-gray-800">Inventory Management System</div>
            </header>

            {/* Login Form */}
            <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md mx-auto" >
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    
                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            inputMode="text"
                            className={`w-full px-4 py-2 mt-2 rounded-lg bg-gray-200 border ${errors.name ? 'border-red-500' : 'focus:border-gray-400'} focus:outline-none`}
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">{errors.name}</span>
                        )}
                    </div>

                    {/* Phone Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone number</label>
                        <input
                            type="tel"
                            maxLength="10"
                            inputMode="numeric"
                            className={`w-full px-4 py-2 mt-2 rounded-lg bg-gray-200 border ${errors.phone ? 'border-red-500' : 'focus:border-gray-400'} focus:outline-none`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">{errors.phone}</span>
                        )}
                    </div>

                    {/* Passcode Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                minLength={5}
                                className={`w-full px-4 py-2 mt-2 rounded-lg bg-gray-200 border ${errors.password ? 'border-red-500' : 'focus:border-gray-400'} focus:outline-none`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <i className="fas fa-eye text-gray-500"></i> {/* Replace with icon */}
                            </span>
                        </div>
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password}</span>
                        )}
                    </div>

                    {/* Passcode Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className={`w-full px-4 py-2 mt-2 rounded-lg bg-gray-200 border ${errors.confirmPassword ? 'border-red-500' : 'focus:border-gray-400'} focus:outline-none`}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Enter your confirm password"
                            />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <i className="fas fa-eye text-gray-500"></i> {/* Replace with icon */}
                            </span>
                        </div>
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
                        onClick={() => handleSubmit}
                    >
                        REGISTER
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Register;
