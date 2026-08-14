"use client";

import IconEmail from "@/src/assets/icons/icon-email";
import IconEye from "@/src/assets/icons/icon-eye";
import IconEyesSlash from "@/src/assets/icons/icon-eyes-slash";
import IconLock from "@/src/assets/icons/icon-lock";
import { BackgroundBlueLogin, BackgroundLoginMobile } from "@/src/assets/image/index";
import { PhotoLoginImage } from "@/src/assets/image/photo-login";
import { DTOLogin, SchemaLogin } from "@/src/schemas/login";
import { LoginAdmin } from "@/src/services/login-admin";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DTOLogin>({ resolver: zodResolver(SchemaLogin) });
  const [viewPassword, setViewPassword] = useState(false);

  async function onSubmit(data: DTOLogin) {
    const response = await LoginAdmin(data);

    if (response === undefined) {
      toast.error("Credenciais inválidas!!");
    }

    if (response !== undefined) {
      reset()
      router.push("/dashboard-admin");
    }

    return response;
  }

  function handleViewPassword() {
    return setViewPassword((prev) => !prev);
  }

  return (
    <>
      <Image src={BackgroundBlueLogin} className="absolute max-lg:hidden left-0 w-1/2 h-screen" alt="Photo Background" />
      <main className="w-full h-screen flex max-lg:flex-col max-lg:gap-1 items-center justify-between">
        {/* container image  */}
        <div className="w-[50%]  max-lg:w-full max-lg:h-[70%] h-screen flex items-center justify-center">
          <PhotoLoginImage className="z-10 w-[70%]" />
          <Image src={BackgroundLoginMobile} className="absolute lg:hidden left-0 w-full" alt="" />
        </div>

        {/* container data  */}
        <div className="w-1/2 max-lg:w-full px-8 h-screen flex flex-col gap-12 items-center justify-center">
          {/* container texts  */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-sora text-primary-100 font-bold text-[1.7rem] max-lg:text-[2rem] max-md:text-[1.7rem]">SEJA BEM-VINDO(A)</h1>
            <p className="font-poppins font-light text-[1.2rem] max-lg:text-[1.1rem] text-primary-100 text-center">
              preencha os seus dados abaixo para <br /> continuar
            </p>
          </div>

          {/* container form  */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-6 items-center justify-center" method="post">
            {/* email  */}
            <div className="flex flex-col items-start justify-start w-[50%] max-lg:w-full gap-2">
              <p className="font-poppins text-primary-100 font-medium max-md:text-[1.2rem]">Email</p>
              <div className="w-full flex flex-col">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="seuemail@email.com"
                    className="text-primary-100 text-[0.8rem] max-lg:text-[1rem] max-lg:py-4 max-lg:placeholder:text-[1.1rem] transition-all duration-100 ease-in-out focus:shadow-xl outline-none focus:border-primary-100 focus:border-2 font-poppins font-normal p-3 w-full pl-12 items-center justify-center flex border border-gray-500 placeholder:text-primary-100 placeholder:font-poppins placeholder:font-light rounded-full"
                    {...register("email")}
                    id=""
                  />
                  <IconEmail className="absolute top-1/3 left-4" />
                </div>
                {errors.email && (
                  <div className="w-full flex items-center justify-start">
                    <p className="font-poppins text-red-500 font-light mt-2 text-[0.9rem]">{errors.email?.message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col items-start justify-start w-[50%] max-lg:w-full gap-2">
              <p className="font-poppins text-primary-100 font-medium max-md:text-[1.2rem]">Senha</p>

              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full relative">
                  <input
                    type={viewPassword ? "text" : "password"}
                    placeholder="*********"
                    className="text-primary-100 text-[0.8rem] max-lg:text-[1rem] max-lg:py-4 max-lg:placeholder:text-[1.1rem] transition-all duration-100 ease-in-out focus:shadow-xl outline-none focus:border-primary-100 focus:border-2 font-poppins font-normal p-3 w-full pl-12 items-center justify-center flex border border-gray-500 placeholder:text-primary-100 placeholder:font-poppins placeholder:font-light rounded-full"
                    {...register("senha")}
                    id=""
                    required
                  />
                  <IconLock className="absolute top-1/3 left-4" />
                  <div className="cursor-pointer" onClick={() => handleViewPassword()}>
                    {viewPassword ? <IconEye className="absolute text-primary-100 right-4 top-1/4 w-6" /> : <IconEyesSlash className="absolute text-primary-100 right-4 top-1/4 w-6" />}
                  </div>
                </div>
                {errors.senha && (
                  <div className="w-full justify-start items-center">
                    <p className="font-poppins text-red-500 font-light mt-2 text-[0.9rem]">{errors.senha?.message}</p>
                  </div>
                )}
              </div>
            </div>
            <button type="submit" className="bg-primary-100 mt-4 shadow-xl w-[50%] max-lg:w-full p-3 rounded-full text-white font-semibold">
              FAZER LOGIN
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
