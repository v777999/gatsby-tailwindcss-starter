// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvodqkge")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="lg:space-y-0 mb-16 2xl:mb-24 lg:flex justify-center mx-auto">
      <form onSubmit={handleSubmit}>
        <h3 className="font-serif italic font-light text-3xl mb-10">
          Подписаться на рассылку новостей
        </h3>
        {/* <label htmlFor="email">Email Address</label> */}
        <input className="bg-transparent w-full border-0 border-b border-white mb-8 text-center text-white placeholder-white" id="email" type="email" name="email" placeholder="Ваш Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          className="group relative w-2/4 flex justify-center py-2 px-4 text-sm font-medium text-white bg-transparent border-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-self-center mx-auto"
          type="submit"
          disabled={state.submitting}
        >
          {" "}
          {/* <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span> */}
          Отправить
        </button>
      </form>
    </div>
  )
}

export default ContactForm
