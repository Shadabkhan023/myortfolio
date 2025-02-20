import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azywyrxb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    <hr />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <br />
        <h1 className="text-3xl font-bold mb-4 text-green-400">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/azywyrxb"
            // method="POST"
            className="w-96 px-8 py-6 rounded-2xl bg-zinc-900 text-white"



          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none   py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-600"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none   py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-600"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-600"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bgzinc-600 text-white rounded-xl px-3 py-2 hover:bg-black duration-300 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
