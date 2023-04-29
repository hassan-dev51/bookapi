"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const LoginSubmit = (d: any) => {
    console.log(d);
  };

  return (
    <div className="min-h-screen">
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <form
          className="mt-12 flex flex-col gap-5"
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-400 font-medium mb-4">Password</span>
            <input
              type="password"
              {...register("password", { required: true })}
              autoComplete="off"
              placeholder="Enter password?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
            />
            {errors.password && <span>this field is required</span>}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary"
          >
            Send
          </button>
        </form>
        <p className="my-4">
          Not have account {"  "}
          <Link href="/register">
            <button
              type="button"
              className="text-xl font-extrabold text-gray-600"
            >
              Sign up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
