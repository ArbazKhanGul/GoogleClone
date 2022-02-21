import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon,MicrophoneIcon} from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const searchInputRef=useRef(null);
  const router=useRouter();
  
  
  const search=(e)=>{
  e.preventDefault();
  const term=searchInputRef.current.value;
  if(!term) 
  return;
  
  router.push(`/search?term=${term}`);
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google.ico" />
      </Head>

<header className="flex w-full justify-between items-center p-5 text-sm text-gray-700">
  {/* Left */}
  <div className='flex space-x-4 items-center'>
  
    <p className="link">About</p>
    <p className="link">Store</p>
  </div>
  {/* Right */}
  <div className='flex space-x-4 items-center'>
    <p className="link">Gmail</p>
    <p className="link">Images</p>
    {/* Icon */}
    <ViewGridIcon className="h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
    <Avatar url={"/profile.jpeg"}/>
  </div>
</header>
{/* Header */}
{/* Body */}

<form className="flex flex-col items-center w-4/5 justify-center flex-grow ">
  
<Image
src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
height="100"
width="300"
></Image>

<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
border border-gray-200 rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
  <SearchIcon className="h-5 mr-3 text-gray-500"/>
  <input type="text" ref={searchInputRef} className="flex-grow focus:outline-none" />
  <MicrophoneIcon className="h-5"></MicrophoneIcon>
</div>
<div className="flex flex-col w-1/2 space-y-2 justify-center mt-4 sm:space-y-0 sm:flex-row sm:space-x-4">
  <button className="btn" onClick={search}>Google Search</button>
  <button className="btn" onClick={search}>I'm feeling Lucky</button>
</div>
</form>
{/* Footer */}
<Footer></Footer>
    </div>
  )
}
