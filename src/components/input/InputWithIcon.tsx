import input from "../interface/Input";
import { useRef } from "react";
export default function InputWithIcon({ className, value, onChange, placeholder }: input) {
  const input = useRef(null)
    function checkActive() {
      console.log(input.current)
    }
  return (
    <div className="border-[1px] border-gray-300 w-full rounded-xl px-3">
      <div className="flex gap-x-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search fill-gray-300" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input className="border-none py-2 w-full" placeholder="search reservation number" ref={input} onChange={checkActive} />
      </div>
    </div>
  )
}