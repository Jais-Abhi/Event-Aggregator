import React, { useState } from 'react'

const steps = [
  'Email Verification',
  'Personal Details',
  'Academic Details',
  'Phone Verification',
  'Set Password',
]

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString()

const StudentRegister = () => {
  const [step, setStep] = useState(0)

  // form state
  const [email, setEmail] = useState('')
  const [emailVerified, setEmailVerified] = useState(false)
  const [emailOtpSent, setEmailOtpSent] = useState(false)
  const [emailOtp, setEmailOtp] = useState('')
  const [emailOtpServer, setEmailOtpServer] = useState('')

  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')

  const [college, setCollege] = useState('')
  const [course, setCourse] = useState('')
  const [branch, setBranch] = useState('')
  const [year, setYear] = useState('')
  const [rollNo, setRollNo] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneOtpSent, setPhoneOtpSent] = useState(false)
  const [phoneOtp, setPhoneOtp] = useState('')
  const [phoneOtpServer, setPhoneOtpServer] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [message, setMessage] = useState(null)

  // Step 1 actions (Email)
  const verifyEmailFormat = () => {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!re.test(email.trim())) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' })
      return false
    }
    setMessage({ type: 'success', text: 'Email format looks good. You can send OTP.' })
    return true
  }

  const sendEmailOtp = () => {
    if (!verifyEmailFormat()) return
    const otp = generateOtp()
    setEmailOtpServer(otp)
    setEmailOtpSent(true)
    setMessage({ type: 'success', text: `OTP sent to ${email} (simulated: ${otp})` })
  }

  const verifyEmailOtp = () => {
    if (!emailOtpSent) {
      setMessage({ type: 'error', text: 'Please send OTP first.' })
      return
    }
    if (emailOtp === emailOtpServer) {
      setEmailVerified(true)
      setMessage({ type: 'success', text: 'Email verified.' })
    } else {
      setMessage({ type: 'error', text: 'Incorrect OTP.' })
    }
  }

  // Phone OTP
  const sendPhoneOtp = () => {
    const cleaned = phone.replace(/[^0-9]/g, '')
    if (cleaned.length < 7) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number.' })
      return
    }
    const otp = generateOtp()
    setPhoneOtpServer(otp)
    setPhoneOtpSent(true)
    setMessage({ type: 'success', text: `Phone OTP sent (simulated: ${otp})` })
  }

  const verifyPhoneOtp = () => {
    if (!phoneOtpSent) {
      setMessage({ type: 'error', text: 'Please send phone OTP first.' })
      return
    }
    if (phoneOtp === phoneOtpServer) {
      setMessage({ type: 'success', text: 'Phone verified.' })
      return true
    }
    setMessage({ type: 'error', text: 'Incorrect phone OTP.' })
    return false
  }

  const handleNext = () => {
    setMessage(null)
    if (step === 0) {
      if (!emailVerified) {
        setMessage({ type: 'error', text: 'Please verify your email before proceeding.' })
        return
      }
      setStep(step + 1)
      return
    }

    if (step === 1) {
      if (!name.trim() || !dob || !gender) {
        setMessage({ type: 'error', text: 'Please complete your personal details.' })
        return
      }
      setStep(step + 1)
      return
    }

    if (step === 2) {
      if (!college.trim() || !course.trim() || !branch.trim() || !year.trim() || !rollNo.trim()) {
        setMessage({ type: 'error', text: 'Please fill academic details.' })
        return
      }
      setStep(step + 1)
      return
    }

    if (step === 3) {
      if (!verifyPhoneOtp()) return
      setStep(step + 1)
      return
    }

    if (step === 4) {
      if (!password || password.length < 6) {
        setMessage({ type: 'error', text: 'Password must be at least 6 characters.' })
        return
      }
      if (password !== confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match.' })
        return
      }

      // Final registration - here you would call your API
      const payload = {
        email,
        name,
        dob,
        gender,
        college,
        course,
        branch,
        year,
        rollNo,
        phone,
      }
      console.log('Register payload (simulated):', payload)
      setMessage({ type: 'success', text: 'Registration complete (simulated).' })
    }
  }

  const handleBack = () => {
    setMessage(null)
    if (step > 0) setStep(step - 1)
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left info column */}
        <aside className="p-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Student Registration</h2>
          <p className="text-sm text-gray-600 mb-6">Follow the steps to create your student account. We'll verify your email and phone along the way.</p>

          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s} className={`flex items-center gap-3 ${i === step ? 'text-indigo-600' : i < step ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${i <= step ? (i === step ? 'border-indigo-600' : 'border-green-600') : 'border-gray-300'}`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <div>
                  <div className="text-sm font-medium">{s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-gray-500">
            By creating an account you agree to our Terms and Privacy Policy.
          </div>
        </aside>

        {/* Right form column */}
        <section className="p-8 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">{steps[step]}</h3>

          {message && (
            <div className={`mb-4 p-3 rounded text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
              {message.text}
            </div>
          )}

          {/* Step 0 - Email Verification */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 flex gap-2">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="flex-1 rounded-md border px-3 py-2" placeholder="you@college.edu" />
                  <button onClick={verifyEmailFormat} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Verify Email</button>
                </div>
              </div>

              <div>
                <button onClick={sendEmailOtp} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black">Send OTP</button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <input value={emailOtp} onChange={e => setEmailOtp(e.target.value)} type="text" className="mt-1 rounded-md border px-3 py-2 w-48" placeholder="6-digit OTP" />
                <div className="mt-2">
                  <button onClick={verifyEmailOtp} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Verify OTP</button>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <div />
                <button onClick={handleNext} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Next</button>
              </div>
            </div>
          )}

          {/* Step 1 - Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input value={dob} onChange={e => setDob(e.target.value)} type="date" className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Back</button>
                <button onClick={handleNext} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Next</button>
              </div>
            </div>
          )}

          {/* Step 2 - Academic Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">College Name</label>
                <input value={college} onChange={e => setCollege(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course</label>
                  <input value={course} onChange={e => setCourse(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Branch</label>
                  <input value={branch} onChange={e => setBranch(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Year of Study</label>
                  <input value={year} onChange={e => setYear(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Roll No. / Enrollment No.</label>
                  <input value={rollNo} onChange={e => setRollNo(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Back</button>
                <button onClick={handleNext} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Next</button>
              </div>
            </div>
          )}

          {/* Step 3 - Phone verification */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1 flex gap-2">
                  <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91XXXXXXXXXX" className="flex-1 rounded-md border px-3 py-2" />
                  <button onClick={sendPhoneOtp} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black">Send OTP</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <input value={phoneOtp} onChange={e => setPhoneOtp(e.target.value)} className="mt-1 rounded-md border px-3 py-2 w-48" placeholder="6-digit OTP" />
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Back</button>
                <button onClick={() => { if (verifyPhoneOtp()) setStep(step + 1) }} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Next</button>
              </div>
            </div>
          )}

          {/* Step 4 - Set Password */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Back</button>
                <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Register</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default StudentRegister