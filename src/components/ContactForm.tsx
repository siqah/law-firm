import { useState } from 'react';

const ContactForm = () => {
  const attorneyEmail = "faruoqmuhammed@gmail.com";
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const mailto = `mailto:${attorneyEmail}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;
    
    window.location.href = mailto;

    // Show success message
    setShowSuccessMessage(true);

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="rounded">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg mx-auto p-6 shadow rounded"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100  "
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border p-2 rounded h-32 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200 dark:bg-gray-450"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Send Message
          </button>
        </form>

        {showSuccessMessage && (
          <div className="mt-4 p-4 bg-green-500 text-white rounded">
            Your message has been sent successfully! We'll get back to you shortly.
          </div>
        )}
      </div>
  );
};

export default ContactForm;