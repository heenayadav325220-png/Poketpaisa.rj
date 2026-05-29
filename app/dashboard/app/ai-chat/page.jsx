'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '👋 Hey! I am AURA AI — your personal assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', text: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: '⚠️ Something went wrong. Please try again.' }])
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <Link href="/">
          <h1 className="text-2xl font-black gradient-text cursor-pointer">AURA AI</h1>
        </Link>
        <Link href="/dashboard">
          <button className="glass-card px-4 py-2 text-sm rounded-full hover:glow transition">
            ← Dashboard
          </button>
        </Link>
      </nav>

      {/* Chat Area */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in`}>
            <div className={`px-5 py-3 rounded-2xl max-w-xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-primary text-white rounded-br-none'
                : 'glass-card text-gray-200 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start fade-in">
            <div className="glass-card px-5 py-3 rounded-2xl rounded-bl-none text-sm text-gray-400">
              AURA is thinking... ✨
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Ask AURA anything..."
            className="flex-1 glass-card px-5 py-3 rounded-full text-sm outline-none text-white placeholder-gray-500 focus:glow transition"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-primary px-6 py-3 rounded-full font-bold text-sm glow hover:opacity-90 transition disabled:opacity-50"
          >
            Send 🚀
          </button>
        </div>
      </div>

    </div>
  )
  }
