import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import carImage from "../../assets/HomeImages/Nangma.jpg"; // Adjust the path as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name,
      to_name: 'Recipient Name',
      message: formData.message,
      from_email: formData.email,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setNotification('Message sent successfully!');
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setNotification('Failed to send the message. Please try again.');
          setStatus('error');
        }
      );
  };

  return (
    <div
      className="flex justify-center items-center py-12 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.7)), url(${carImage})`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 bg-opacity-90 shadow-lg rounded px-8 py-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-800 transition transform hover:scale-105 duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </div>

        {notification && (
          <div
            className={`mt-4 p-2 text-center font-semibold ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
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
