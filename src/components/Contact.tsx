import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between w-[100%] my-16 p-2 md:p-3 min-h-[250px] md:min-h-[700px] rounded-md">
      <div className="bg-[url('/contactIcon.svg')] hidden md:block bg-no-repeat bg-contain md:bg-cover md:w-[49%] h-[600px] rounded-s-md"></div>
      <div className="md:w-[49%] text-slate-50 md:my-10 md:mx-5">
        <div className="text-center text-xl font-semibold mb-3">
          <h1>Send Me an Email:</h1>
        </div>
        <form className="flex flex-col space-y-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="text" id="subject" placeholder="subject" />
          </div>
          <div className="grid w-full gap-1.5">
            <Textarea
              className="h-[250px]"
              placeholder="Type your message here."
              id="message"
            />
          </div>
          <div className="flex  w-full items-end justify-end">
            <Button type="submit" variant="outline">
              Send Email
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
