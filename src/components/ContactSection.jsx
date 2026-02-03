import React, { useState } from 'react'
import { 
    Instagram, 
    Mail, 
    Phone, 
    MapPin, 
    Linkedin, 
    Twitter, 
    MessageCircle,
    Send
} from 'lucide-react'
import { send } from '@emailjs/browser'

const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        const { name, email, subject, message } = formData
        const templateParams = {
            from_name: name,
            reply_to: email,
            subject,
            message
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        try {
            await send(serviceId, templateId, templateParams, publicKey)
            setStatus('Message sent! I will get back to you soon.')
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            console.error('EmailJS error', error)
            setStatus('Something went wrong. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 section-divider">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 display-font">
                Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
                I'm open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                
                                <a href="mailto:obamiyiayodeji@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    obamiyiayodeji@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                
                                <a href="tel:+2348033170015" className="text-muted-foreground hover:text-primary transition-colors">
                                    +234 803 317 0015
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                
                                <p className="text-muted-foreground">
                                    Lagos, Nigeria
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* Social Media */}
                    <div className="pt-8 border-t border-muted-foreground/30">
                        <h4 className="mb-4 font-medium">Connect with me:</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/daniel-ayodeji-obamiyi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-6 w-6"/>
                            </a>
                            <a href="https://x.com/Obamiyiayodeji" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-6 w-6"/>
                            </a>
                            <a href="https://www.instagram.com/big.addo.dev?igsh=MXdrN2wzOGhlbm1hMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-lg border border-muted-foreground/30 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@email.com"
                                    required
                                    className="w-full rounded-lg border border-muted-foreground/30 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project inquiry"
                                required
                                className="w-full rounded-lg border border-muted-foreground/30 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                className="w-full resize-none rounded-lg border border-muted-foreground/30 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send className="h-4 w-4" />
                            </button>
                            {status && (
                                <div className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>{status}</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
                
    </section>
    )
};

export default ContactSection