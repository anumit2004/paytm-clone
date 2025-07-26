import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Header */}
      <div className='flex justify-between items-center p-6'>
        <div className='text-2xl font-bold text-gray-800'>
          PayTM Clone
        </div>
        <div className='flex gap-4'>
          <button 
            onClick={() => navigate('/signin')}
            className='px-6 py-2 text-blue-600 hover:text-blue-800 font-semibold'
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold'
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center px-4 py-20'>
        <div className='text-center max-w-4xl'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Send Money <span className='text-blue-600'>Instantly</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
            Transfer money to friends and family with just a few clicks. 
            Fast, secure, and reliable payments made simple.
          </p>
          
          <div className='flex gap-4 justify-center mb-16'>
            <button 
              onClick={() => navigate('/signup')}
              className='px-16 py-3 border-2 border-blue-600 text-white rounded-lg bg-blue-600 hover:bg-blue-800 font-semibold'
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mt-16'>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Instant Transfers</h3>
            <p className='text-gray-600'>Send money instantly to anyone with just their username</p>
          </div>

          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Secure & Safe</h3>
            <p className='text-gray-600'>Your money and data are protected with bank-level security</p>
          </div>

          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Lightning Fast</h3>
            <p className='text-gray-600'>Experience the fastest payment processing in the industry</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid md:grid-cols-3 gap-8 max-w-4xl mt-20 text-center'>
          <div>
            <div className='text-3xl font-bold text-blue-600 mb-2'>1M+</div>
            <div className='text-gray-600'>Active Users</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-blue-600 mb-2'>₹50Cr+</div>
            <div className='text-gray-600'>Transferred</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-blue-600 mb-2'>99.9%</div>
            <div className='text-gray-600'>Uptime</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='text-center py-8 text-gray-500 border-t'>
        <p>Made with ❤️ by Anumit Kumar Jana</p>
      </div>
    </div>
  )
}

export default LandingPage