import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef(null);

  function sendMail(e) {
    e.preventDefault();
    toast.info("Sending Email...");
    emailjs
      .sendForm("service_smh480i", "template_yzbxejd", form.current, {
        publicKey: "Cai3Dcnqg_VArR_4E",
      })
      .then(
        () => {
          toast.success("Email sent");
        },
        (error) => {
          toast.warn(error.text || "something went wrong");
        }
      );
  }
  return (
    <>
      <div className="h-full md:px-[2.5rem] flex flex-col items-center overflow-hidden ">
        <div className="text-center">
          <h2
            style={{ letterSpacing: "3px" }}
            className="text-xl underline underline-offset-8 font-bold uppercase"
          >
            Reach me
          </h2>
          <form ref={form} onSubmit={sendMail} action="">
            <div className="py-[1rem] gap-y-[1.35rem] max-w-[800px] min-w-[100vw] md:min-w-[800px] grid md:px-0 px-[1.5rem]">
              <div className="text-start grid gap-y-[0.5rem]">
                <label htmlFor="user_email" className="block">
                  Your Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Email ID."
                  className="rounded-sm w-[50vw] max-w-[300px] outline-none border-none px-[1rem] py-[0.25rem]"
                />
              </div>
              <div className="text-start grid gap-y-[0.5rem]">
                <label htmlFor="subject" className="block">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  className="rounded-sm w-[50vw] max-w-[300px] outline-none border-none px-[1rem] py-[0.25rem]"
                />
              </div>
              <div className="text-start grid gap-y-[0.5rem]">
                <label htmlFor="message" className="block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={10}
                  type="email"
                  name="message"
                  placeholder="Enter your thoughts."
                  className="rounded-sm  w-full outline-none border-none px-[1rem] py-[0.25rem]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  style={{ letterSpacing: "1.2px" }}
                  className="outline-none border-none bg-blue-600 rounded-md px-[3rem] uppercase "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
