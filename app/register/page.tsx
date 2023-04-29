"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed")
    .required("Name is required"),
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address"
    )
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[\!\@\#\$\%\^\&\*\(\)\-\+\=\[\]\{\}\|\:\;\"\'\,\.\<\>\/\?].*[\!\@\#\$\%\^\&\*\(\)\-\+\=\[\]\{\}\|\:\;\"\'\,\.\<\>\/\?]).{8,}$/,
      "password should contain uppercase lowercase and numbers"
    )
    .required("Password is required"),
});

const Reginster = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const FormSubmit: SubmitHandler<FormData> = (d, e) => {
    console.log(d);
    e?.target.reset();
  };

  return (
    <div className="min-h-screen">
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <form
          className="mt-12 flex flex-col gap-5"
          method="POST"
          onSubmit={handleSubmit(FormSubmit)}
        >
          {/* name */}
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Name</span>
            <input
              type="text"
              {...register("name")}
              placeholder="What's your good name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
            />
          </label>
          {errors.name && (
            <p className="text-red-400 p-1">{errors.name.message}</p>
          )}
          {/* email */}
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Email</span>
            <input
              type="email"
              {...register("email")}
              placeholder="What's your email address?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
            />
          </label>
          {errors.email && (
            <p className="text-red-400 p-1">{errors.email.message}</p>
          )}

          <label className="flex flex-col">
            <span className=" font-medium mb-4">Password</span>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              required
              minLength={8}
              autoComplete="off"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
            />
          </label>
          {errors.password && (
            <p className="text-red-400 p-1">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary"
          >
            Sign up
          </button>
        </form>
        <span className="my-4 capitalize">already have account </span>
        <Link href="/login" className="text-xl font-extrabold text-gray-400">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Reginster;
