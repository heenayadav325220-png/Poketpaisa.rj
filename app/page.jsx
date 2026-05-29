import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-black gradient-text">AURA AI</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/ai-chat" className="hover:text-white transition">AI Chat</Link>
          <Link href="/finance" className="hover:text-white transition">Finance</Link>
          <Link href="/health" className="hover:text-white transition">Health</Link>
          <Link href="/learning" className="hover:text-white transition">Learning</Link>
        </div>
        <Link href="/dashboard">
          <button className="bg-primary px-5 py-2 rounded-full text-sm font-semibold glow hover:opacity-90 transition">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 py-20 fade-in">
        
        {/* Badge */}
        <div className="glass-card px-4 py-2 text-xs text-purple-300 mb-6 inline-block">
          🌍 World's First Universal Life Assistant
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Your Entire Life,<br />
          <span className="gradient-text">One App.</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          AURA AI combines Artificial Intelligence, Finance, Health, and Learning
          into one powerful app — designed for the world.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/dashboard">
            <button className="bg-primary px-8 py-3 rounded-full font-bold text-lg glow pulse-glow hover:opacity-90 transition">
              🚀 Launch App
            </button>
          </Link>
          <Link href="/ai-chat">
            <button className="glass-card px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition">
              🤖 Try AI Chat
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        
        {[
          { icon: '🤖', title: 'AI Assistant', desc: 'Personal AI that understands you' },
          { icon: '💰', title: 'Smart Finance', desc: 'Track money, invest smarter' },
          { icon: '🏥', title: 'Health Monitor', desc: 'Your personal health guide' },
          { icon: '📚', title: 'Learning Engine', desc: 'Learn anything, anytime' },
        ].map((feature, i) => (
          <div key={i} className="glass-card p-6 hover:glow transition cursor-pointer fade-in">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-6">
        © 2025 AURA AI — Built for the World 🌍
      </footer>

    </div>
  )
          }
