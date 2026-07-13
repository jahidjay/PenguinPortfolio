'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServicesSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      setStatusMessage('Please fill in all fields')
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Message sent successfully! I&apos;ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setStatusMessage(data.message || 'Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Error sending message. Please try again.')
      console.error('[v0] Contact form error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="services" className="min-h-screen py-24 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Have a question or want to discuss a project? Send me a message and I&apos;ll respond via Telegram or email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let&apos;s connect</h3>

              {/* Direct Contact Methods */}
              <div className="space-y-4">
                <a
                  href="mailto:jahidyasin2010@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all group"
                >
                  <Mail size={24} className="text-cyan-400 group-hover:text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-white font-medium">jahidyasin2010@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://t.me/penguinstream"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-purple-400/20 hover:border-purple-400/50 bg-purple-400/5 hover:bg-purple-400/10 transition-all group"
                >
                  <Send size={24} className="text-purple-400 group-hover:text-purple-300" />
                  <div>
                    <p className="text-sm text-slate-400">Telegram</p>
                    <p className="text-white font-medium">@penguinstream</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5">
              <p className="text-sm text-slate-300">
                <span className="text-cyan-400 font-semibold">Response Time:</span> I typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What&apos;s this about?"
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-300">
                <CheckCircle size={20} />
                <p>{statusMessage}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-400/10 border border-red-400/30 text-red-300">
                <AlertCircle size={20} />
                <p>{statusMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
