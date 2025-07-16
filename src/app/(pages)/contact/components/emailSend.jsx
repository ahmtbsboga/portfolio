import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Image from "next/image";

const ContactForm = ({ translate }) => {
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
    <div className="z-50 bg-gray-100 mt-10 rounded-lg">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto p-4 w-full shadow-2xl shadow-gray-200 rounded-xl"
      >
        <div className="flex border-b-4 border-gray-600 items-start">
          <p className="text-gray-600 mt-4 whitespace-normal font-serif">
            {translate
              ? "Her türlü soru ve iş birliği fikri için bana e-posta ile ulaşabilirsiniz."
              : "Feel free to reach out via email for any questions or collaboration ideas."}
          </p>
          <Image
            src={"/mail.png"}
            alt="mailpng"
            width={150}
            height={200}
            quality={100}
            className="object-cover mb-4 rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl"
          />
        </div>
        <input
          type="text"
          name="name"
          placeholder={translate ? "Adınız" : "Your Name"}
          required
          className="p-2 border border-gray-300 rounded text-black outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder={translate ? "E-posta adresiniz" : "Your Email"}
          required
          className="p-2 border border-gray-300 rounded text-black outline-none"
        />
        <input
          type="text"
          name="title"
          placeholder={translate ? "Konu" : "Subject"}
          required
          className="p-2 border border-gray-300 rounded text-black outline-none"
        />
        <textarea
          name="message"
          placeholder={translate ? "Mesajınız" : "Your Message"}
          required
          className="p-2 border border-gray-300 rounded h-32 text-black outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-green-600 duration-400"
        >
          {translate ? "Gönder" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
