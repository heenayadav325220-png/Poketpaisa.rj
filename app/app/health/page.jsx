'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Health() {
  const [water, setWater] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [steps, setSteps] = useState(0)

  const healthScore = Math.min(100, Math.round(
    (water / 8 * 40) + (sleep / 8 * 40) + (steps / 10000 * 20)
  ))

  return (
    <div className="min-h-screen bg-dark text-white">

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

      <div className="max-w-4xl mx-auto px-8 py-10">

        {/* Header */}
        <div className="mb-8 fade-in">
          <h2 className="text-4xl font-black mb-2">🏥 Health <span className="gradient-text">Monitor</span></h2>
          <p className="text-gray-400">Track your daily health habits.</p>
        </div>

        {/* Health Score */}
        <div className="glass-card p-8 text-center mb-8 fade-in pulse-glow">
          <p className="text-gray-400 text-sm mb-2">Your Health Score</p>
          <div className="text-7xl font-black gradient-text">{healthScore}</div>
          <div className="text-gray-400 mt-2">out of 100</div>
          <div className="mt-4 text-2xl">
            {healthScore >= 80 ? '🟢 Excellent!' : healthScore >= 50 ? '🟡 Good' : '🔴 Needs Improvement'}
          </div>
        </div>

        {/* Trackers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Water */}
          <div className="glass-card p-6 text-center fade-in">
            <div className="text-4xl mb-3">💧</div>
            <h3 className="font-bold mb-1">Water Intake</h3>
            <p className="text-gray-400 text-sm mb-4">{water} / 8 glasses</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setWater(w => Math.max(0, w - 1))}
                className="glass-card px-4 py-2 rounded-full text-sm hover:glow transition"
              >-</button>
              <button
                onClick={() => setWater(w => Math.min(8, w + 1))}
                className="bg-primary px-4 py-2 rounded-full text-sm glow hover:opacity-90 transition"
              >+</button>
            </div>
          </div>

          {/* Sleep */}
          <div className="glass-card p-6 text-center fade-in">
            <div className="text-4xl mb-3">😴</div>
            <h3 className="font-bold mb-1">Sleep Hours</h3>
            <p className="text-gray-400 text-sm mb-4">{sleep} / 8 hours</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setSleep(s => Math.max(0, s - 1))}
                className="glass-card px-4 py-2 rounded-full text-sm hover:glow transition"
              >-</button>
              <button
                onClick={() => setSleep(s => Math.min(12, s + 1))}
                className="bg-primary px-4 py-2 rounded-full text-sm glow hover:opacity-90 transition"
              >+</button>
            </div>
          </div>

          {/* Steps */}
          <div className="glass-card p-6 text-center fade-in">
            <div className="text-4xl mb-3">👟</div>
            <h3 className="font-bold mb-1">Steps Today</h3>
            <p className="text-gray-400 text-sm mb-4">{steps.toLocaleString()} / 10,000</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setSteps(s => Math.max(0, s - 1000))}
                className="glass-card px-4 py-2 rounded-full text-sm hover:glow transition"
              >-</button>
              <button
                onClick={() => setSteps(s => Math.min(10000, s + 1000))}
                className="bg-primary px-4 py-2 rounded-full text-sm glow hover:opacity-90 transition"
              >+</button>
            </div>
          </div>

        </div>

        {/* Health Tips */}
        <div className="glass-card p-6 fade-in">
          <h3 className="text-lg font-bold mb-4">💡 Daily Health Tips</h3>
          {[
            { icon: '💧', tip: 'Drink at least 8 glasses of water daily' },
            { icon: '😴', tip: 'Sleep 7-8 hours every night for best health' },
            { icon: '👟', tip: 'Walk 10,000 steps daily to stay fit' },
            { icon: '🥗', tip: 'Eat more vegetables and less processed food' },
            { icon: '🧘', tip: 'Meditate 10 minutes daily for mental health' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm text-gray-300">{item.tip}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
