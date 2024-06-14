import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    lookingFor: "",
    bio: "",
  });

  const [message, setMessage] = useState("");

  const { name, email, password, age, gender, lookingFor, bio } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      setMessage("User registered successfully");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setMessage(err.response.data.message || "Error occurred");
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={onChange}
        placeholder="Gender"
        required
      />
      <input
        type="text"
        name="lookingFor"
        value={lookingFor}
        onChange={onChange}
        placeholder="Looking For"
        required
      />
      <textarea
        name="bio"
        value={bio}
        onChange={onChange}
        placeholder="Bio"
      ></textarea>

      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;
