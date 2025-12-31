import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StudentLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setMessage(null)

    if (!email.trim() || !password.trim()) {
      setMessage({ type: 'error', text: 'Please fill in both fields.' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Mock login success
      setMessage({ type: 'success', text: 'Login successful! Redirecting...' })
      console.log('Login payload:', { email, password })
      // In production, redirect to dashboard or home
      // navigate('/dashboard')
    }, 1000)
  }

return (
    <div className="min-h-[80vh] flex bg-gray-50">
        {/* Left Column - Info & Logo */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex-col justify-center items-center p-12">
            <div className="text-center">
                {/* Logo/Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
                <p className="text-2xl text-indigo-100 mb-4">Event Aggregator</p>
                <p className="text-indigo-200 text-lg leading-relaxed max-w-md">
                    Join thousands of students discovering and participating in college events. Stay connected with campus activities and networking opportunities.
                </p>

                <div className="mt-12 space-y-4 text-base">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Discover upcoming events</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Register for activities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Connect with peers</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-12">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Login</h2>
                <p className="text-gray-600 mb-8">Enter your credentials to access your account</p>

                {message && (
                    <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            placeholder="you@college.edu"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition"
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.5 12c1.755 4.126 5.56 7 10.5 7 1.906 0 3.695-.46 5.268-1.277M9.88 9.88a3 3 0 104.24 4.24M6.228 6.228A10.45 10.45 0 0112 5c4.94 0 8.745 2.874 10.5 7a10.522 10.522 0 01-4.132 4.868M6.228 6.228L3 3m3.228 3.228l3.286 3.286m7.258 7.258L21 21m-3.228-3.228l-3.286-3.286"
                                        />
                                        </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.435 0 .642C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        </svg>

                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        New user?{' '}
                        <Link to="/register/student" className="font-semibold text-indigo-600 hover:text-indigo-700">
                            Register here
                        </Link>
                    </p>
                </div>

                <div className="mt-4 text-center text-xs text-gray-500">
                    <Link to="/" className="hover:text-indigo-600">Back to Home</Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default StudentLogin