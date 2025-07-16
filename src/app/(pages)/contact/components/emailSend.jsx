import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x84h80n", // EmailJS Service ID
        "template_1ryxsyn", // Template ID
        form.current,
        "sy8eRlrM4_KsHjyMc" // Public Key
      )
      .then(
        (result) => {
          toast.success("Mesaj gönderildi");
          e.target.reset();
        },
        (error) => {
          toast.error("Mesaj gönderilemedi");
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto p-4 mb-100 w-full shadow-2xl shadow-black mt-10"
      >
        <p className="text-gray-600 mt-4 whitespace-normal font-serif">
          Sorularınızı ve taleplerinizi e-posta yoluyla iletebilirsiniz.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta adresiniz"
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="text"
          name="title"
          placeholder="Konu"
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          required
          className="p-2 border border-gray-300 rounded h-32 text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-green-600 duration-400"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
