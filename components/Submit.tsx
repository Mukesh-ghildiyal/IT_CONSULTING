"use client";
import { useState } from "react";

export default function GoogleSheetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse("Submitting...");

    try {
      const res = await fetch("/api/addData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);
      setResponse(result.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error submitting data.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Submit Data to Google Sheets</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="p-2 border rounded w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
          className="p-2 border rounded w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      {response && <p className="mt-3">{response}</p>}
    </div>
  );
}
