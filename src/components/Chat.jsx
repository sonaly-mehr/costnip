import React from "react";
import Image from "next/image";
import user from "../assets/user.png";

const Chat = () => {
  return (
    <>
      <div className="mb-3 mt-8 md:mt-0">
        <div className="chat-bg md:w-4/5 ">
          <p className="text-xs md:text-sm leading-5 md:leading-6 py-3 px-5">
            Same here, have suffered alteration in some form, by injected
            humour, or randomised{" "}
          </p>
        </div>

        <div className="flex gap-2 items-center mt-2">
          <Image src={user} alt="" className="w-[20px] md:w-[full]" />
          <h6 className="text-[11px] text-[#FBFBFB] font-medium">Mike</h6>
          <span className="text-[11px] opacity-30">08:24 AM</span>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="chat-bg2  md:w-4/5">
          <p className="text-xs md:text-sm leading-5 md:leading-6 py-3 px-5">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true
            generator.
          </p>
        </div>
      </div>

      <div className="flex md:justify-end mt-12">
        <button className="text-xs md:text-sm py-2 px-6 border-2 border-solid border-primary rounded-3xl">
          Start Chat
        </button>
      </div>
    </>
  );
};

export default Chat;
