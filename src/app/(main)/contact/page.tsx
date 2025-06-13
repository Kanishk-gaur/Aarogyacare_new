"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactFormSection } from "@/components/contact/ContactFormSection"
import { ContactFAQs } from "@/components/contact/ContactFAQs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    telephone: "",
    email: "",
    complaint: "",
  })

  const [errors, setErrors] = useState<{
    name?: string;
    address?: string;
    telephone?: string;
    email?: string;
  }>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: typeof errors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    // Telephone validation
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Please enter a valid phone number"
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.telephone.replace(/\s/g, ""))) {
      newErrors.telephone = "Please enter a valid phone number"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Feedback submitted:", formData)

      setIsSubmitting(false)
      setSubmitted(true)
      
      // Reset form data
      setFormData({ 
        name: "", 
        address: "", 
        telephone: "", 
        email: "", 
        complaint: "" 
      })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)

    } catch (error) {
      console.error("Error submitting feedback:", error)
      setIsSubmitting(false)
      // You might want to show an error message to the user here
    }
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactFormSection
        onSubmit={handleSubmit}
        formData={formData}
        onFormChange={handleFormChange}
        isSubmitting={isSubmitting}
        submitted={submitted}
        errors={errors}
      />
      <ContactFAQs />
      <Footer />
    </div>
  )
}