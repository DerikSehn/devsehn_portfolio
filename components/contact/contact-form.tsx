"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import type React from "react"
import { useRef, useState } from "react"


const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY!

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)
  

  const handleSubmit = (e: React.FormEvent) => {
    if(success) return;
    e.preventDefault()

    emailjs.init(publicKey)

    emailjs.sendForm(serviceID, templateID, form.current!, { publicKey }).then(
      (result) => {
        console.log(result.text)
        setSuccess(true)
        alert("Mensagem enviada com sucesso!")
      },
      (error) => {
        console.log(error.text)
        alert("Ocorreu um erro ao enviar a mensagem.")
      },
    )
  }

  return (
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <Input type="text" id="from_name" name="from_name" className="mt-1" required />
          </div>
          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" id="from_email" name="from_email" className="mt-1" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <Textarea id="message" name="message" className="mt-1 min-h-[100px]" required />
          </div>
          <Button  type="submit" className="w-full">
            Enviar
          </Button>
          {success && <p className="text-green-500">Mensagem enviada com sucesso!</p>}
        </form>
  )
}