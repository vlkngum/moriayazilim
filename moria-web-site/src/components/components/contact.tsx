import { useState } from "react";
import emailjs from "emailjs-com";
import { time } from "console";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionTime, setSubmissionTime] = useState<string | null>(null);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const currentTime = new Date().toLocaleString();  
    setSubmissionTime(currentTime); 

    emailjs
      .send(
        "service_wzzfpoy", // EmailJS servis ID'si
        "template_qnj5aojfyeyeupj", // EmailJS template ID'si
        { 
          title: formData.subject,
          name: formData.name,
          time: currentTime,
          message: formData.message,
          email: formData.email,
        },
        "WQppF9Gcp5D3Lu2aF" // EmailJS public key
      )
      .then(
        (response) => {
          alert(`Mesajınız başarıyla gönderildi! Gönderim Zamanı: ${currentTime}`);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Mesaj gönderme hatası:", error);
          alert("Mesaj gönderilirken bir hata oluştu.");
        }
      );
  };

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center p-4 ">
      <div className="w-full h-full flex flex-row items-center justify-center rounded-xl border border-gray-400">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center h-full w-[40%] px-20 py-10 gap-6 rounded-bl-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={formData.name}
            onChange={handleChange}
            className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Konu"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={formData.message}
            onChange={handleChange}
            className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-fuchsia-800 text-white w-min py-3 px-10 self-center rounded-md hover:bg-fuchsia-900 transition duration-200 shadow-xl shadow-gray-700 mt-8 text-2xl cursor-pointer"
          >
            Gönder
          </button>
        </form>

        <div
          className="h-full w-[60%] bg-cover bg-center rounded-br-xl rounded-tr-xl items-top justify-center flex px-10 py-20"
          style={{ backgroundImage: `url('/contactbg.jpg')` }}
        >
          <h2 className="text-8xl font-semibold text-white text-center opacity-80">
            Bize Ulaşın
          </h2>
        </div>
      </div>
    </div>
  );
}
