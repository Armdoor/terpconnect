"use client"
import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required!");
      return;
    }
    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!username) {
      setError("Username is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }
    try {
      console.log("we trinh buddy");
      const resUserExists = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });
  
      const data = await resUserExists.json(); // Parse response JSON
  
      if (resUserExists.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Registration failed:", data.message); // Log error message
        setError(data.message); // Display error message to user
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  return (
    <div>
      <h1> Sign up Terps </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' name='name' />
        <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='User Name' name='username' />
        <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' name='email' />
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' name='password' />
        <button className='subBtn' type='submit' value='Send'> Login </button>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
