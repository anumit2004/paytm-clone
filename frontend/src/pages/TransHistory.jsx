import React from 'react';
import { Heading } from '../components/Heading';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TransHistory = () => {
    const [transactions, setTransactions] = React.useState([]);
    const [currentUserId, setCurrentUserId] = React.useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        // Get current user ID from token
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setCurrentUserId(payload.userId);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }

        // Fetch transaction history
        axios.get("http://localhost:3000/api/v1/account/transactions", {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((response)=>{
            setTransactions(response.data.transactions);
        })
    },[]);
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-300 to-indigo-800 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className='fixed inset-0 pointer-events-none z-0'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
                <div className='absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
                <div className='absolute -bottom-40 -right-10 w-80 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
                <div className='absolute -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-6000'></div>
            </div>

            {/* Header */}
            <div className='relative z-10'>
                <div className='flex justify-between items-center p-6 bg-white/10 backdrop-blur-md shadow-md'>
                    <div className='flex items-center gap-3'>
                        <div className='w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg'>
                            <img src="https://img.icons8.com/?size=64&id=46058&format=png" alt="Transaction Icon" className='w-12 h-12' />
                        </div>
                        <h1 className='text-2xl font-bold text-gray-800'>Transaction Details</h1>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className='px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors'
                        >
                            ← Back to Dashboard
                        </button>
                    </div>
                </div>
                {/* Summary Stats */}
                {transactions.length > 0 && (
                    <div className='max-w-6xl mx-auto px-6 mt-8 pb-10'>
                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                                        <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 11l5-5m0 0l5 5m-5-5v12' />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className='font-semibold text-gray-900'>Total Credit</div>
                                        <div className='text-sm text-green-600 font-medium'>
                                            ₹{transactions.filter(tx => tx.to?._id === currentUserId).reduce((sum, tx) => sum + tx.amount, 0)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center'>
                                        <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 13l-5 5m0 0l-5-5m5 5V6' />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className='font-semibold text-gray-900'>Total Debit</div>
                                        <div className='text-sm text-red-600 font-medium'>
                                            ₹{transactions.filter(tx => tx.from?._id === currentUserId).reduce((sum, tx) => sum + tx.amount, 0)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                        <img src="https://img.icons8.com/?size=48&id=pDAhA18v9AXr&format=png" alt="Total Transactions Icon" className='w-10 h-10' />
                                    </div>
                                    <div>
                                        <div className='font-semibold text-gray-900'>Total Transactions</div>
                                        <div className='text-sm text-blue-600 font-medium'>
                                            {transactions.length} transactions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Transaction History Section */}
                <div className='max-w-6xl mx-auto px-6 mb-8 '>
                    <div className='bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden'>
                        {/* Section Header */}
                        <div className='p-6 border-b border-gray-200/30'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                                    <img src="https://img.icons8.com/?size=80&id=68219&format=png" alt="History Icon" className='w-10 h-10' />
                                </div>
                                <Heading label="Your Transaction History" text_size="text-2xl" />
                            </div>
                            <p className='text-gray-600'>View all your recent transactions and transfers</p>
                        </div>

                        {/* Transactions List */}
                        <div className='max-h-96 overflow-y-auto scrollbar-hide'>
                            {transactions.length === 0 ? (
                                <div className='p-12 text-center'>
                                    <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                        <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                                        </svg>
                                    </div>
                                    <h3 className='text-lg font-medium text-gray-900 mb-2'>No transactions found</h3>
                                    <p className='text-gray-500'>Your transaction history will appear here once you start making transfers</p>
                                </div>
                            ) : (
                                <div className='divide-y divide-gray-100/30'>
                                     {transactions.map(tx => {
                            const isCurrentUserReceiver = tx.to?._id === currentUserId;
            
                            const isCredit = isCurrentUserReceiver;
                            
                            return (
                                <div key={tx._id} className='p-6 hover:bg-blue-200/20 transition-colors duration-200'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
                                                <img 
                                                    src={isCredit ? "https://img.icons8.com/?size=48&id=IA4hgI5aWiHD&format=png" : "https://img.icons8.com/?size=48&id=gzeZVqbrQKDg&format=png"} 
                                                    alt={isCredit ? "Credit Icon" : "Debit Icon"} 
                                                    className='w-10 h-10' 
                                                />
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2 mb-1'>
                                                    <span className={`text-lg font-bold ${
                                                        isCredit ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                        {isCredit ? "+" : "-"}₹{tx.amount}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        isCredit ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {isCredit ? 'Credit' : 'Debit'}
                                                    </span>
                                                </div>
                                                <div className='text-sm text-gray-600'>
                                                    {/* ✅ CORRECTED: Show the other party */}
                                                    {isCredit ? 'From: ' : 'To: '}
                                                    <span className='font-medium text-gray-800'>
                                                        {isCredit ? 
                                                            // If credit, show sender (from)
                                                            (tx.from?.firstname ? `${tx.from.firstname} ${tx.from.lastname || ''}` : tx.from?.username || 'System') :
                                                            // If debit, show receiver (to)
                                                            (tx.to?.firstname ? `${tx.to.firstname} ${tx.to.lastname || ''}` : tx.to?.username || 'System')
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-right'>
                                            <div className='text-sm text-gray-800 mb-1'>
                                                {new Date(tx.timestamp).toLocaleDateString('en-IN', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            <div className='text-xs text-gray-700'>
                                                {new Date(tx.timestamp).toLocaleTimeString('en-IN', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit'
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
  );
};
export default TransHistory;