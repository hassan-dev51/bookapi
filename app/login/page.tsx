"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type User = {
  email: string;
  password: string;
};
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();
  const router = useRouter();

  const LoginSubmit: SubmitHandler<User> = async (d, e) => {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: d.email, password: d.password }),
    });

    if (res.status === 200) {
      alert("Login successful");
      e?.target.reset();
      setTimeout(() => {
        router.push("/order");
      }, 100);
    } else if (res.status === 429) {
      alert("invalid password and email");
    } else {
      alert("internal error");
    }
    console.log(d);
  };

  return (
    <div className="bg-white min-h-[85vh]">
      <div className="w-[660px] m-auto p-8">
        <h2 className="text-[#1A202C] text-[48px] font-bold capitalize">
          Login
        </h2>

        <form
          className="mt-12 flex flex-col gap-5 "
          method="GET"
          onSubmit={handleSubmit(LoginSubmit)}
        >
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Email</span>
            <input
              type="email"
              {...register("email")}
              required
              placeholder="What's your email address?"
              className="bg-[#EDF2F7] py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-400 font-medium mb-4">Password</span>
            <input
              type="password"
              {...register("password", { required: true })}
              autoComplete="off"
              placeholder="Enter password?"
              className="bg-[#EDF2F7] py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
            {errors.password && <span>this field is required</span>}
          </label>

          <button
            type="submit"
            className="bg-[#8ac919] py-3 px-8 text-[20px] outline-none w-full text-white font-normal hover:bg-white hover:text-[#8ac919] hover:outline-[#8ac919]"
          >
            Login
          </button>
        </form>

        <h3 className="text-[#1A202C] text-[16px] font-normal mt-6">
          Don&apos;t have an account,
          <Link href="/register">Sign Up</Link>
        </h3>
      </div>
    </div>
  );
};
export default Login;
