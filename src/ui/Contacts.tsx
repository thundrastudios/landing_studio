import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Iform {
  name: string;
  contact: string;
}
export function Contacts() {
  const { register, handleSubmit, formState } = useForm<Iform>({
    mode: "onChange",
  });
  const errorname = formState.errors.name?.message;
  const errorcontact = formState.errors.contact?.message;
  const onSubmit: SubmitHandler<Iform> = (data) => {
    console.log(data.name);
  };
  useEffect(() => {
    async function F() {
      const res = await fetch("https://stjnunvmyabafzcbpwmo.supabase.co");
      const data = await res.json();
      console.log(data);
    }
    F;
  });

  return (
    <>
      <form
        data-aos="fade-up"
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col  items-center text-2xl"
      >
        <div className="h-20">
          <input
            className=" text-gray-300 text-center p-3 rounded-4xl border-2"
            type="text"
            placeholder="Ведите свое имя"
            {...register("name", {
              required: "This field is reqred",
              pattern: {
                value: /^[A-Z0-9А-Яа-яA-z]{2,20}$/i,
                message:
                  "Нельзя использовать спец. символы. Пожалуйста напишите свое имя.",
              },
            })}
          />
          {errorname && (
            <p className=" w-60 text-sm">
              Нельзя использовать спец. символы. Пожалуйста напишите свое имя.
            </p>
          )}
        </div>
        <div className="h-20">
          <input
            className="text-gray-300 text-center p-3 rounded-4xl border-2"
            type="text"
            placeholder="Ведите контакт для связи"
            {...register("contact", {
              required: "This Field is reqre",
              pattern: {
                value: /^[+A-Z0-9a-z!@#&_=]{3,30}$/i,
                message: "incorect contact",
              },
            })}
          />
          {errorcontact && (
            <p className="w-60 text-sm">
              Неправильный контак, напишите свой контакт(email,ТГ,тел.)
            </p>
          )}
        </div>
        {!errorcontact && !errorname && formState.isValid ? (
          <button
            type="submit"
            className="bg-green-400 p-5 rounded-3xl m-5 shadow-2xl transition-all border-2  duration-500"
          >
            Отправить
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="border-2 p-5 rounded-3xl m-5 transition-all duration-500"
          >
            Отправить
          </button>
        )}
      </form>
    </>
  );
}
