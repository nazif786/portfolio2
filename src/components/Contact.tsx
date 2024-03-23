"use client";
import { Input } from "@/components/ui/input";
import { sendEmail } from "../actions/sendEmail";
import { Textarea } from "./ui/textarea";
import Submit_btn from "./Submit_btn";
import toast from "react-hot-toast";

const Contact = () => {
  const submit = async (formData: any) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
    }
    if (data && data.error) {
      const errorMessage =
        data.error.message || "An error occurred while sending the email.";
      toast.error(errorMessage);
    } else {
      toast.success("Email sent successfully!");
      const form = document.getElementById("emailForm") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  };
  return (
    <>
      <section
        id="contact"
        className="mt-12 p-2 pt-5 pb-10 md:pb-0 bg-muted dark:bg-background rounded-md"
      >
        <div className="w-full m-auto text-center mb-10">
          <h1 className="md:text-3xl">Contact Me</h1>
          <p className="text-sm text-muted-foreground">
            send me an eamil to{" "}
            <a href="mailto:nazif.it@gmail.com" className="font-mono font-bold">
              nazif.it@gmail.com
            </a>{" "}
            or use the following form
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center w-[100%]  md:p-3 min-h-[250px] md:min-h-[700px] ">
          <div className="bg-[url('/contactIcon.svg')] hidden md:block bg-no-repeat bg-contain md:bg-fit md:w-[30%] h-[450px] rounded-s-md"></div>
          <div className="md:w-[49%] md:my-5 md:mx-5 w-full">
            <div className="md:text-md font-semibold mb-3 text-muted-foreground">
              <h1>Send Me an Email:</h1>
            </div>
            <form
              id="emailForm"
              action={submit}
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
                {}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
