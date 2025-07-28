import React, { useEffect, useState } from 'react'
import { Heading } from '../components/Heading'
import { UserMoneySending } from '../components/UserMoneySending'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState(0); 
  const [currentuser, setCurrentUser] = useState({});
 
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  
  useEffect(() => {
   axios.get("http://localhost:3000/api/v1/user/bulk/me",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response)=>{
      setCurrentUser(response.data.user);
    })
  },[]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response) => {
      setBalance(response.data.balance);
    })
    .catch((error) => {
      console.error("Error fetching balance:", error);
    });
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  const gotoAddMoney = () => {
    navigate("/addmoney");
  }
  const transhistory =() => {
    navigate("/transhistory");
  }
  return (
  <div className='min-h-screen bg-gradient-to-br from-blue-300 to-indigo-800 relative overflow-hidden'>
    {/* Background decorative elements */}
    <div className='fixed inset-0 pointer-events-none z-0'>
      <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
      <div className='absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
      <div className='absolute -bottom-40 -right-10 w-80 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
      <div className='absolute  -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-6000'></div>
    </div>

    {/* Header */}
    <div className='relative z-10'>
      <div className='flex justify-between items-center p-6 bg-white/10 backdrop-blur-md shadow-md'>
        <div className='flex items-center gap-3'>
          <div className='w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<g clip-path="url(#clip0_1720_3430)">
<path d="M25.0001 48.9797C38.2437 48.9797 48.9797 38.2437 48.9797 25.0001C48.9797 11.7565 38.2437 1.02051 25.0001 1.02051C11.7565 1.02051 1.02051 11.7565 1.02051 25.0001C1.02051 38.2437 11.7565 48.9797 25.0001 48.9797Z" fill="white" stroke="#00BAF2" stroke-width="2"></path>
<path d="M38.6976 14.5671C38.5709 14.2049 38.3348 13.8911 38.0218 13.6691C37.7088 13.4471 37.3346 13.3279 36.9508 13.3281H36.934C36.6845 13.3276 36.4375 13.3779 36.208 13.4758C35.9785 13.5738 35.7714 13.7175 35.5992 13.898C35.4266 13.7179 35.2194 13.5746 34.99 13.4767C34.7606 13.3787 34.5138 13.3282 34.2643 13.3281H34.2475C33.802 13.3289 33.3719 13.4914 33.0371 13.7854V13.6442C33.032 13.5754 33.0011 13.511 32.9506 13.4639C32.9001 13.4168 32.8338 13.3906 32.7647 13.3903H31.524C31.4514 13.3903 31.3817 13.4192 31.3303 13.4706C31.2789 13.522 31.25 13.5917 31.25 13.6644V20.389C31.2518 20.4605 31.2814 20.5285 31.3326 20.5785C31.3838 20.6284 31.4525 20.6563 31.524 20.6563H32.7614C32.8284 20.6574 32.8934 20.6338 32.9442 20.5901C32.995 20.5464 33.028 20.4857 33.0371 20.4193V15.5927C33.0362 15.5764 33.0362 15.5601 33.0371 15.5439C33.046 15.4343 33.0947 15.3318 33.174 15.2556C33.2532 15.1795 33.3576 15.1349 33.4675 15.1303H33.6961C33.791 15.1375 33.8817 15.1726 33.9567 15.2312C34.0103 15.2751 34.0533 15.3306 34.0824 15.3935C34.1115 15.4564 34.126 15.525 34.1248 15.5943V20.3974C34.1239 20.4344 34.1305 20.4712 34.1441 20.5055C34.1578 20.5399 34.1783 20.5712 34.2044 20.5974C34.2305 20.6236 34.2616 20.6443 34.2959 20.6582C34.3301 20.6721 34.3669 20.6789 34.4039 20.6782H35.6412C35.7116 20.6778 35.7792 20.6504 35.8299 20.6015C35.8806 20.5527 35.9105 20.4863 35.9136 20.4159V15.5859C35.9114 15.5096 35.9288 15.434 35.9641 15.3663C35.9994 15.2987 36.0515 15.2411 36.1153 15.1993C36.1833 15.1549 36.2613 15.1283 36.3423 15.1219H36.5675C36.6854 15.128 36.7962 15.18 36.8763 15.2667C36.9564 15.3534 36.9995 15.4679 36.9962 15.5859V20.384C36.9962 20.4567 37.0251 20.5264 37.0765 20.5777C37.1279 20.6291 37.1976 20.658 37.2703 20.658H38.5093C38.582 20.658 38.6517 20.6291 38.703 20.5777C38.7544 20.5264 38.7833 20.4567 38.7833 20.384V15.2228C38.797 15.0008 38.7679 14.7782 38.6976 14.5671V14.5671Z" fill="#00B8F5"></path>
<path d="M30.314 13.4004H29.6046V12.2522C29.6048 12.2191 29.5985 12.1864 29.586 12.1558C29.5735 12.1252 29.5551 12.0974 29.5318 12.074C29.5085 12.0505 29.4808 12.0319 29.4503 12.0192C29.4198 12.0065 29.3871 12 29.3541 12H29.3087C28.5219 12.2152 28.6799 13.3046 27.2459 13.3971H27.1063C27.0868 13.3945 27.067 13.3945 27.0475 13.3971C26.9869 13.4108 26.9327 13.4447 26.8939 13.4933C26.8551 13.5419 26.834 13.6022 26.834 13.6644V14.9118C26.834 14.9845 26.8629 15.0542 26.9142 15.1056C26.9656 15.1569 27.0353 15.1858 27.108 15.1858H27.8561V20.4378C27.8561 20.5096 27.8847 20.5784 27.9354 20.6292C27.9862 20.6799 28.055 20.7085 28.1268 20.7085H29.3524C29.424 20.708 29.4926 20.6794 29.5433 20.6287C29.5939 20.578 29.6226 20.5094 29.623 20.4378V15.1858H30.3174C30.3898 15.1854 30.459 15.1563 30.51 15.105C30.5611 15.0536 30.5897 14.9842 30.5897 14.9118V13.6744C30.5897 13.6383 30.5826 13.6025 30.5687 13.5692C30.5548 13.5358 30.5345 13.5055 30.5089 13.4801C30.4832 13.4546 30.4528 13.4345 30.4194 13.4208C30.3859 13.4071 30.3501 13.4002 30.314 13.4004Z" fill="#00B8F5"></path>
<path d="M25.8567 13.4006H24.6177C24.5817 13.4006 24.5462 13.4077 24.513 13.4215C24.4799 13.4353 24.4498 13.4555 24.4245 13.481C24.3992 13.5065 24.3791 13.5367 24.3656 13.5699C24.352 13.6032 24.3451 13.6388 24.3453 13.6747V16.2351C24.344 16.3113 24.3128 16.384 24.2584 16.4375C24.204 16.4909 24.1307 16.5209 24.0545 16.5209H23.5367C23.4984 16.5211 23.4605 16.5137 23.4251 16.4992C23.3897 16.4847 23.3576 16.4632 23.3305 16.4362C23.3035 16.4091 23.282 16.377 23.2675 16.3416C23.253 16.3062 23.2456 16.2683 23.2458 16.23V13.6747C23.2458 13.602 23.217 13.5323 23.1656 13.4809C23.1142 13.4295 23.0445 13.4006 22.9718 13.4006H21.7277C21.6551 13.4006 21.5854 13.4295 21.534 13.4809C21.4826 13.5323 21.4537 13.602 21.4537 13.6747V16.4755C21.4435 16.7188 21.4839 16.9616 21.5724 17.1884C21.6609 17.4153 21.7955 17.6213 21.9678 17.7934C22.14 17.9655 22.3462 18.1 22.5731 18.1883C22.8001 18.2766 23.0429 18.3167 23.2862 18.3063C23.2862 18.3063 24.0864 18.3063 24.1116 18.3063C24.1811 18.3155 24.2449 18.3497 24.291 18.4024C24.3372 18.4551 24.3627 18.5228 24.3627 18.5929C24.3627 18.663 24.3372 18.7307 24.291 18.7834C24.2449 18.8362 24.1811 18.8703 24.1116 18.8796H24.0915L22.2775 18.8947C22.2057 18.8951 22.1369 18.9237 22.086 18.9744C22.035 19.025 22.006 19.0936 22.0051 19.1654V20.4027C22.0049 20.4387 22.0118 20.4744 22.0253 20.5077C22.0389 20.541 22.0589 20.5714 22.0842 20.597C22.1095 20.6226 22.1396 20.6429 22.1727 20.6569C22.2059 20.6709 22.2415 20.6782 22.2775 20.6784H24.2949C24.5374 20.6884 24.7793 20.648 25.0054 20.5598C25.2315 20.4715 25.4369 20.3374 25.6086 20.1659C25.7803 19.9944 25.9146 19.7891 26.003 19.5631C26.0914 19.3371 26.132 19.0952 26.1223 18.8527V13.6747C26.1223 13.6034 26.0946 13.535 26.045 13.4838C25.9954 13.4327 25.9279 13.4028 25.8567 13.4006V13.4006Z" fill="#162B75"></path>
<path d="M13.9782 13.4004H11.2715C11.2363 13.4002 11.2013 13.4069 11.1687 13.4203C11.1361 13.4336 11.1064 13.4533 11.0814 13.4781C11.0564 13.5029 11.0366 13.5325 11.023 13.565C11.0095 13.5976 11.0025 13.6325 11.0025 13.6677V20.3924C10.9979 20.4635 11.0217 20.5335 11.0687 20.5871C11.1156 20.6407 11.1819 20.6734 11.253 20.6782H12.5139C12.5499 20.6782 12.5855 20.6711 12.6188 20.6573C12.652 20.6436 12.6822 20.6234 12.7077 20.5979C12.7331 20.5725 12.7533 20.5423 12.7671 20.509C12.7808 20.4758 12.7879 20.4401 12.7879 20.4042V18.5213H13.9731C14.1967 18.5318 14.42 18.4955 14.6288 18.4148C14.8375 18.334 15.0271 18.2106 15.1854 18.0523C15.3436 17.894 15.4671 17.7045 15.5478 17.4957C15.6286 17.287 15.6649 17.0637 15.6543 16.8401V15.0849C15.665 14.8616 15.6291 14.6385 15.5488 14.4298C15.4684 14.2211 15.3455 14.0315 15.1878 13.873C15.0301 13.7145 14.841 13.5906 14.6328 13.5092C14.4245 13.4279 14.2016 13.3908 13.9782 13.4004V13.4004ZM13.8723 15.67V16.4332C13.8723 16.5101 13.8419 16.5838 13.7877 16.6383C13.7335 16.6928 13.66 16.7236 13.5831 16.7241H12.793V15.1925H13.5797C13.6181 15.1921 13.6562 15.1993 13.6918 15.2137C13.7274 15.2282 13.7598 15.2495 13.787 15.2766C13.8142 15.3037 13.8358 15.3359 13.8504 15.3714C13.8651 15.4069 13.8725 15.445 13.8723 15.4834V15.67Z" fill="#162B75"></path>
<path d="M18.8122 13.4071H17.0924C17.0575 13.406 17.0227 13.4118 16.9901 13.4241C16.9574 13.4364 16.9275 13.455 16.902 13.4789C16.8766 13.5028 16.8561 13.5315 16.8417 13.5633C16.8274 13.5951 16.8194 13.6295 16.8183 13.6643V14.8243C16.8194 14.8614 16.8278 14.8978 16.843 14.9316C16.8583 14.9653 16.88 14.9957 16.9071 15.0211C16.9341 15.0464 16.9659 15.0661 17.0006 15.0791C17.0353 15.0921 17.0722 15.098 17.1092 15.0967H18.7483C18.813 15.1051 18.8729 15.1356 18.9176 15.1831C18.9623 15.2306 18.9893 15.2922 18.9938 15.3573V15.5254C18.9879 15.5888 18.9602 15.6483 18.9155 15.6937C18.8708 15.739 18.8117 15.7675 18.7483 15.7742H17.943C16.8654 15.7742 16.0938 16.4887 16.0938 17.494V18.9348C16.0938 19.9435 16.7528 20.6462 17.8237 20.6462H20.0731C20.2587 20.6526 20.4394 20.5856 20.5759 20.4598C20.7125 20.3339 20.794 20.1593 20.8027 19.9738V15.2665C20.8027 14.1216 20.216 13.4071 18.8122 13.4071ZM19.0089 18.5767V18.7701C19.0097 18.7852 19.0097 18.8003 19.0089 18.8154C19.0058 18.8291 19.0018 18.8426 18.9971 18.8558V18.8558C18.976 18.9115 18.9382 18.9594 18.8888 18.9928C18.8395 19.0262 18.781 19.0435 18.7214 19.0424H18.2019C18.1647 19.044 18.1275 19.0382 18.0925 19.0253C18.0576 19.0124 18.0255 18.9928 17.9981 18.9675C17.9708 18.9422 17.9487 18.9117 17.9332 18.8778C17.9177 18.8439 17.909 18.8073 17.9077 18.7701V17.9059V17.7109C17.9112 17.6364 17.9439 17.5663 17.9986 17.5157C18.0533 17.4651 18.1257 17.438 18.2003 17.4402H18.7147C18.7895 17.438 18.8622 17.4653 18.9169 17.5163C18.9717 17.5673 19.0042 17.6378 19.0072 17.7126L19.0089 18.5767Z" fill="#162B75"></path>
<path d="M32.2691 38.016H30.7812L32.8508 30.5449H34.3386L32.2691 38.016Z" fill="#231F20"></path>
<path d="M31.4982 30.7822C31.4426 30.7092 31.3697 30.6513 31.286 30.6137C31.2023 30.5761 31.1106 30.5601 31.0191 30.567H22.8402L22.435 32.0313H29.8759L29.4438 33.5965H23.4891H22.003L20.7656 38.0482H22.2551L23.084 35.0557H29.775C29.9902 35.0536 30.1983 34.9783 30.3651 34.8422C30.5423 34.712 30.6707 34.5261 30.7299 34.3143L31.5587 31.3219C31.5914 31.2334 31.6029 31.1386 31.5924 31.0449C31.5819 30.9512 31.5496 30.8612 31.4982 30.7822V30.7822Z" fill="#231F20"></path>
<path d="M19.9011 37.5503C19.8617 37.6949 19.7758 37.8226 19.6568 37.9138C19.5377 38.0049 19.392 38.0544 19.2421 38.0546H11.5675C11.478 38.0607 11.3884 38.0444 11.3068 38.0071C11.2252 37.9698 11.1542 37.9128 11.1002 37.8411C11.0486 37.7641 11.0159 37.6761 11.0045 37.5841C10.9931 37.4922 11.0034 37.3988 11.0346 37.3116L12.9074 30.5701H14.3969L12.7242 36.592H18.6789L20.36 30.5701H21.8411L19.9011 37.5503Z" fill="#231F20"></path>
<path d="M36.9085 30.5583L38.7931 34.304L34.834 38.0496L36.9085 30.5583Z" fill="#008C44"></path>
<path d="M35.5877 30.5583L37.4689 34.304L33.5098 38.0496L35.5877 30.5583Z" fill="#F47920"></path>
<path d="M11.001 24.6792H20.2911V25.9081H11.001V24.6792Z" fill="#00B8F5"></path>
<path d="M11.001 25.9082H20.2911V27.1371H11.001V25.9082Z" fill="#162B75"></path>
<path d="M29.4961 24.6792H38.7863V25.9081H29.4961V24.6792Z" fill="#00B8F5"></path>
<path d="M29.4961 25.9082H38.7863V27.1371H29.4961V25.9082Z" fill="#162B75"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8459 22.9619C24.0231 22.1214 22.689 22.1214 21.8661 22.9619C21.0433 23.8025 21.0433 25.1652 21.8661 26.0057L24.585 28.783C24.7575 28.9592 25.0371 28.9592 25.2095 28.783L27.9284 26.0057C28.7512 25.1652 28.7512 23.8025 27.9284 22.9619C27.1055 22.1214 25.7715 22.1214 24.9486 22.9619L24.8973 23.0144L24.8459 22.9619Z" fill="#FD5154"></path>
</g>
<defs>
<clipPath id="clip0_1720_3430">
<rect width="50" height="50" fill="white"></rect>
</clipPath>
</defs>
</svg>
          </div>
          <h1 className='text-2xl font-bold text-gray-800'>PayTM Clone</h1>
        </div>
        
        <div className='flex items-center gap-4'>
          <div className='text-right'>
            <div className='text-sm text-gray-700'>Welcome back,</div>
            <div className='font-semibold text-gray-800'>{currentuser.firstname} {currentuser.lastname}</div>
          </div>
          <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full  text-white flex items-center justify-center shadow-lg font-bold text-lg' >
            {currentuser.firstname?.[0]?.toUpperCase() || "U"}
          </div>
          <button 
            onClick={handleLogout}
            className='px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors'
          >
            Logout
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className='max-w-6xl mx-auto px-6 mt-8 hover:scale-105 transition-transform duration-300'>
        <div className='bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='text-gray-800 text-lg mb-2'>Your Current Balance</div>
              <div className='text-4xl font-bold text-gray-900'>₹{balance.toFixed(2)}</div>
              <div className='text-green-600 text-sm mt-2 flex items-center gap-1'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Account Active
              </div>
            </div>
            <div className='w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'>
              <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Recharge And Pay bills   */}
      <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 mt-8 '>
        <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6  shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200' >
            <div className='font-semibold text-gray-900 pb-4'>Recharge</div> 
            <div className='flex items-center justify-between gap-3'>

              <div className=' flex flex-col items-center justify-center'>
                <img className='w-14 h-14 ' src ="https://assetscdn1.paytm.com/images/catalog/view_item/2988613/26703338778768661.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>Recharge Mobile</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src="https://assetscdn1.paytm.com/images/catalog/view_item/2988614/19614608007586469.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>FASTag Recharge</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src= "https://assetscdn1.paytm.com/images/catalog/view_item/2988612/26703374140606265.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>DTH Recharge</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src="https://assetscdn1.paytm.com/images/catalog/view_item/2988615/19614637083573629.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>View All Products</div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6  shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200' >
             <div className='font-semibold text-gray-900 pb-4'>Bill Payments</div> 
            <div className='flex items-center justify-between gap-3'>

              <div className=' flex flex-col items-center justify-center'>
                <img className='w-14 h-14 ' src ="https://assetscdn1.paytm.com/images/catalog/view_item/2988617/26703405458074894.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800 '>Electricity Bill</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src="https://assetscdn1.paytm.com/images/catalog/view_item/2988616/19614670037666787.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>LIC/Insurance</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src= "https://assetscdn1.paytm.com/images/catalog/view_item/3075896/19614703601071380.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>Loan EMI Payment</div>
                </div>
              </div>
              <div>
                <img className='w-14 h-14 ' src="https://assetscdn1.paytm.com/images/catalog/view_item/2988615/19614637083573629.png" alt="Recharge" />
                <div>
                  <div className='text-sm text-gray-800'>View All Products</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* Users Section */}
      <div className='max-w-6xl mx-auto px-6 mt-8 hover:scale-105 transition-transform duration-300'>
        <div className='bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden' >
          {/* Section Header */}
          <div className='p-6 border-b border-gray-200/30'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-gray-900'>Send Money</h2>
            </div>
            
            {/* Search Box */}
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <input 
                onChange={(e) => {setFilter(e.target.value)}}
                className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white/80 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' 
                placeholder='Search users by name...'
                type='text'
              />
            </div>
          </div>

          {/* Users List */}
          <div className='max-h-96 overflow-y-auto scrollbar-hide'>
            {users.length > 0 ? (
              <div className='divide-y divide-gray-100/30'>
                {users.map((user) => (
                  <div key={user._id} className='p-4 hover:bg-blue-200/20 transition-colors duration-200'>
                    <UserMoneySending 
                      avatar_label={user.username[0].toUpperCase()} 
                      user_label={user.firstname + " " + user.lastname} 
                      navlink={"/send?id=" + user._id + "&name=" + user.firstname} 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className='p-12 text-center'>
                <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
                  </svg>
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>No users found</h3>
                <p className='text-gray-500'>Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
      

      {/* Quick Actions */}
      <div className='max-w-6xl mx-auto px-6 mt-8 pb-20'>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200' onClick={gotoAddMoney}>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                </svg>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Add Money</div>
                <div className='text-sm text-gray-600'>Top up your wallet</div>
              </div>
            </div>
          </div>

          <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200' onClick={transhistory}>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                </svg>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Transaction History</div>
                <div className='text-sm text-gray-600'>View past transactions</div>
              </div>
            </div>
          </div>

          <div className='bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>Settings</div>
                <div className='text-sm text-gray-600'>Manage your account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard
