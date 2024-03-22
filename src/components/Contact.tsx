"use client";
import { Input } from "@/components/ui/input";
import { sendEmail } from "../actions/sendEmail";
import { Textarea } from "./ui/textarea";
import Submit_btn from "./Submit_btn";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-[100%] my-16 p-2 md:p-3 min-h-[250px] md:min-h-[700px] rounded-md bg-muted dark:bg-background">
      <div className="bg-[url('/contactIcon.svg')] hidden md:block bg-no-repeat bg-contain md:bg-fit md:w-[30%] h-[450px] rounded-s-md"></div>
      <div className="md:w-[49%] md:my-10 md:mx-5 w-full">
        <div className="text-center text-xl font-semibold mb-3 ">
          <h1>Send Me an Email:</h1>
        </div>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              alert(error);
              return;
            } else {
              toast.success("Message sent successfully");

              // alert("message send successfully");
            }
          }}
          className="flex flex-col space-y-6"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5 bg-background">
            <Input
              name="senderEmail"
              type="email"
              id="email"
              placeholder="Email"
              max={200}
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 bg-background">
            <Input
              name="subject"
              type="text"
              id="subject"
              placeholder="subject"
              max={200}
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Textarea
              name="message"
              className="h-[250px] bg-background"
              placeholder="Type your message here."
              id="message"
              maxLength={500}
              required
            />
            <Submit_btn />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
