"use client";

import { useState, ChangeEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [method, setMethod] = useState("whatsapp"); // 'whatsapp' or 'email'

  // Add your WhatsApp number here (with country code, no + or spaces)
  const WHATSAPP_NUMBER = "7558347738"; // Replace with your number
  // Add your email here
  const YOUR_EMAIL = "sail.nagale24@vit.edu"; // Replace with your email

  // FIXED: Added strict typing for the event 'e'
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    if (method === "whatsapp") {
      // Format message for WhatsApp
      const message = `*New Message Received via Portfolio Website*\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");
    } else {
      // Format email
      const subject = encodeURIComponent(
        `Contact Form: Message from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoUrl;
    }

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 p-6">
      {/* Method selector */}
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={() => setMethod("whatsapp")}
          className={`px-4 py-2 rounded-md transition-colors ${
            method === "whatsapp"
              ? "bg-green-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          💬 WhatsApp
        </button>
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`px-4 py-2 rounded-md transition-colors ${
            method === "email"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          ✉️ Email
        </button>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-400"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full px-6 py-3 text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
      >
        Send via {method === "whatsapp" ? "WhatsApp" : "Email"}
      </button>
    </div>
  );
}
