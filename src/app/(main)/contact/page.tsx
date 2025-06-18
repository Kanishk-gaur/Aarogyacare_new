"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
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
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (!response.ok) {
        throw new Error('Failed to send email')
      }
  
      const data = await response.json()
  
      if (data.success) {
        console.log('Feedback submitted:', formData)
  
        setSubmitted(true)
        setFormData({
          name: "",
          address: "",
          telephone: "",
          email: "",
          complaint: ""
        })
        setErrors({})
  
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Server returned error:', data.error)
        // You can set an error state here to show to the user
      }
  
    } catch (error) {
      console.error('Error submitting feedback:', error)
      // Optional: set error message state to inform the user
    } finally {
      setIsSubmitting(false)
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
      {/* <ContactHero /> */}
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