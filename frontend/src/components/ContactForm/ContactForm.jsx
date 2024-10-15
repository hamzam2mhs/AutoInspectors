import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState(''); // State to handle notification messages
  const [status, setStatus] = useState(''); // Status to track success or error


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to send to EmailJS
    const emailData = {
      from_name: formData.name,        // Send "name" from the form as "from_name"
      to_name: 'Recipient Name',       // You can change this as needed
      message: formData.message,       // Message content
      from_email: formData.email,      // Optional: You can pass more data like the sender's email
    };


    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
      emailData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public API Key
    )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setNotification('Message sent successfully!');
          setStatus('success'); // Set success status
          setFormData({ name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setNotification('Failed to send the message. Please try again.');
          setStatus('error'); // Set error status
        }
      );
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 py-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>

        {/* Notification message */}
        {notification && (
          <div
            className={`mt-4 p-2 text-center font-semibold ${status === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
          >
            {notification}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
