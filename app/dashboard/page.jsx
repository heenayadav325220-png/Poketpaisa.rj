import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <Link href="/">
          <h1 className="text-2xl font-black gradient-text cursor-pointer">AURA AI</h1>
        </Link>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/ai-chat" className="hover:text-white transition">🤖 AI Chat</Link>
          <Link href="/finance" className="hover:text-white transition">💰 Finance</Link>
          <Link href="/health" className="hover:text-white transition">🏥 Health</Link>
          <Link href="/learning" className="hover:text-white transition">📚 Learning</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-10">

        {/* Welcome */}
        <div className="mb-10 fade-in">
          <h2 className="text-4xl font-black mb-2">
            Welcome to <span className="gradient-text">AURA AI</span> 👋
          </h2>
          <p className="text-gray-400">Your personal universe — all in one place.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'AI Chats', value: '128', icon: '🤖' },
            { label: 'Money Saved', value: '₹12,400', icon: '💰' },
            { label: 'Health Score', value: '86/100', icon: '🏥' },
            { label: 'Lessons Done', value: '34', icon: '📚' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 text-center fade-in">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <h3 className="text-xl font-bold mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '🤖', title: 'AI Chat', desc: 'Talk to your AI', href: '/ai-chat', color: 'from-purple-600 to-blue-600' },
            { icon: '💰', title: 'Finance', desc: 'Track your money', href: '/finance', color: 'from-green-600 to-teal-600' },
            { icon: '🏥', title: 'Health', desc: 'Monitor health', href: '/health', color: 'from-red-600 to-pink-600' },
            { icon: '📚', title: 'Learning', desc: 'Learn new skills', href: '/learning', color: 'from-yellow-600 to-orange-600' },
          ].map((item, i) => (
            <Link href={item.href} key={i}>
              <div className={`glass-card p-6 cursor-pointer hover:glow transition fade-in bg-gradient-to-br ${item.color} bg-opacity-10`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="glass-card p-6 fade-in">
          {[
            { icon: '🤖', text: 'AI Chat — Asked about investment tips', time: '2 min ago' },
            { icon: '💰', text: 'Finance — Added ₹500 expense', time: '1 hour ago' },
            { icon: '🏥', text: 'Health — Completed daily checkup', time: '3 hours ago' },
            { icon: '📚', text: 'Learning — Finished React lesson 5', time: 'Yesterday' },
          ].map((activity, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{activity.icon}</span>
                <span className="text-sm text-gray-300">{activity.text}</span>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
      }
