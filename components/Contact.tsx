import React, { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

interface Props {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props): ReactElement {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dragonhuyhoang2001@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-10 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            Let&#39;s Talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5 ">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">+0914953299</p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">dragonhuyhoang2001@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">321 Programming Street</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput min-h-[57px]"
          />
          <button
            type="submit"
            className="rounded-md bg-[#f7ab0a] py-5 px-10 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
