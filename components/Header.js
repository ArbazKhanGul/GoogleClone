import { XIcon,MicrophoneIcon} from "@heroicons/react/solid";
import Image from "next/image";
import {useRouter} from "next/router";
import { useEffect, useRef } from "react";
import {SearchIcon} from "@heroicons/react/outline"
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption";

function Header({searchVal}){
const router=useRouter();
const searchInputRef=useRef(null);
const search=(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    if(!term) 
    return;
    
    router.push(`/search?term=${term}`);
  }
useEffect(()=>{
  searchInputRef.current.value=searchVal;

})

return (
<header className="sticky top-0 bg-white">
    <div className="flex w-full p-6 items-center">
            <Image
src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
height="40"
width="130"
onClick={()=>router.push("/")}
className="cursor-pointer"
></Image>
<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl ">
<input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
<XIcon className="h-7 text-gray-500 cursor-pointer transition 
duration-100 transform hover:scale-125 sm:mr-3"
onClick={()=>{searchInputRef.current.value=""}}></XIcon>
<MicrophoneIcon className="h-6 mr-3  sm:inline-flex 
text-blue-500 border-l-2 pl-3 hidden border-gray-300 "></MicrophoneIcon>

<SearchIcon className="h-6 cursor-pointer text-blue-500 hidden sm:inline-flex" onClick={search}></SearchIcon>
<button hidden type="submit" onClick={search}></button>
</form>
<Avatar url={"/profile.jpeg"} className="ml-auto"></Avatar>
</div>

{/* HeaderOption */}

<HeaderOption/>
        </header>
    )

}

export default Header;