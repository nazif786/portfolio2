"use client";
import { Button } from "./ui/button";
import { BiSendPlus } from "./ui/BiSendPlus";
import { useFormStatus } from "react-dom";

const Submit_btn = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <div className="flex  w-full items-end justify-end">
        <Button type="submit" variant="btn_h">
          {pending ? (
            <div className="h-5 w-5 mx-10 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Send Email
              <BiSendPlus className="ml-3" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Submit_btn;
