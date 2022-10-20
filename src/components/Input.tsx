import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({...rest}: Props) {
  return (
    <input {...rest} autoComplete="off" type="text" className="flex-1 text-md outline-none rounded-lg border-solid border-2 border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder:text-gray-300 sm:text-sm" />
  )
}