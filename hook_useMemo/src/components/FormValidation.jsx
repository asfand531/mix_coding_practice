import { useMemo, useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validationMessage = useMemo(() => {
    if (
      input.name.trim() === "" ||
      input.email.trim() === "" ||
      input.password.trim() === ""
    ) {
      return "⚠️ All fields are required!";
    } else if (!input.email.includes("@gmail.com")) {
      return "❌ Invalid email format!\nMust contain '@gmail.com' domain.";
    } else if (input.password.length < 6) {
      return "🔒 Password must be at least 6 characters long!";
    }
    return "✅ Form looks good!";
  }, [input]);

  return (
    <>
      <p>Name: {input.name}</p>
      <p>Email: {input.email}</p>
      <p>Password: {input.password}</p>
      <div className="container">
        <h2>Form Validation</h2>

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={input.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={input.email}
          onChange={handleChange}
        />
        <label htmlFor="name">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={input.password}
          onChange={handleChange}
        />

        <p className="message">{validationMessage}</p>
      </div>
    </>
  );
}

export default FormValidation;
