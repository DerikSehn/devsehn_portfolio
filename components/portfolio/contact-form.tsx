"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import type { Locale } from "@/lib/portfolio/paths"

type ContactValues = {
  from_name: string
  from_email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

const emptyValues: ContactValues = {
  from_name: "",
  from_email: "",
  message: "",
}

export function ContactForm({ locale }: { locale: Locale }) {
  const english = locale === "en"
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const labels = english
    ? {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about the opportunity, project, or question you have.",
        send: "Send message",
        sending: "Sending message",
        retry: "Try again",
        success: "Message sent. I’ll be in touch.",
        failure: "The message could not be sent. Please try again or email me directly.",
        required: "Please complete this field.",
        invalidEmail: "Enter a valid email address.",
        messageTooLong: "Keep the message under 5,000 characters.",
      }
    : {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "voce@exemplo.com",
        message: "Mensagem",
        messagePlaceholder: "Conte sobre a oportunidade, o projeto ou sua dúvida.",
        send: "Enviar mensagem",
        sending: "Enviando mensagem",
        retry: "Tentar novamente",
        success: "Mensagem enviada. Em breve entro em contato.",
        failure: "Não foi possível enviar a mensagem. Tente novamente ou escreva diretamente para mim.",
        required: "Preencha este campo.",
        invalidEmail: "Informe um endereço de e-mail válido.",
        messageTooLong: "Mantenha a mensagem abaixo de 5.000 caracteres.",
      }

  const updateValue = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status === "error") setStatus("idle")
  }

  const validate = (): ContactErrors => {
    const nextErrors: ContactErrors = {}
    if (!values.from_name.trim()) nextErrors.from_name = labels.required
    if (!values.from_email.trim()) {
      nextErrors.from_email = labels.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.from_email)) {
      nextErrors.from_email = labels.invalidEmail
    }
    if (!values.message.trim()) {
      nextErrors.message = labels.required
    } else if (values.message.length > 5000) {
      nextErrors.message = labels.messageTooLong
    }
    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setValues(emptyValues)
      setErrors({})
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const fieldError = (field: keyof ContactValues) => errors[field]

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="from_name">{labels.name}</label>
        <input
          autoComplete="name"
          id="from_name"
          name="from_name"
          maxLength={120}
          aria-invalid={Boolean(fieldError("from_name"))}
          aria-describedby={fieldError("from_name") ? "from-name-error" : undefined}
          onChange={(event) => updateValue("from_name", event.target.value)}
          placeholder={labels.namePlaceholder}
          required
          value={values.from_name}
        />
        {fieldError("from_name") && (
          <p className="field-error" id="from-name-error">
            {fieldError("from_name")}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="from_email">{labels.email}</label>
        <input
          autoComplete="email"
          id="from_email"
          name="from_email"
          maxLength={254}
          aria-invalid={Boolean(fieldError("from_email"))}
          aria-describedby={fieldError("from_email") ? "from-email-error" : undefined}
          onChange={(event) => updateValue("from_email", event.target.value)}
          placeholder={labels.emailPlaceholder}
          required
          type="email"
          value={values.from_email}
        />
        {fieldError("from_email") && (
          <p className="field-error" id="from-email-error">
            {fieldError("from_email")}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message">{labels.message}</label>
        <textarea
          id="message"
          name="message"
          maxLength={5000}
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={fieldError("message") ? "message-error" : undefined}
          onChange={(event) => updateValue("message", event.target.value)}
          placeholder={labels.messagePlaceholder}
          required
          rows={6}
          value={values.message}
        />
        {fieldError("message") && (
          <p className="field-error" id="message-error">
            {fieldError("message")}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="form-feedback form-feedback-error" role="alert">
          {labels.failure}
        </p>
      )}
      {status === "success" && (
        <p className="form-feedback form-feedback-success" role="status">
          {labels.success}
        </p>
      )}

      <button
        className="action-link action-link-primary form-submit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" className="loading-icon" size={17} />
            {labels.sending}
          </>
        ) : status === "error" ? (
          <>
            {labels.retry}
            <ArrowRight aria-hidden="true" size={17} />
          </>
        ) : status === "success" ? (
          <>
            {english ? "Send another message" : "Enviar outra mensagem"}
            <ArrowRight aria-hidden="true" size={17} />
          </>
        ) : (
          <>
            {labels.send}
            <ArrowRight aria-hidden="true" size={17} />
          </>
        )}
      </button>
    </form>
  )
}
