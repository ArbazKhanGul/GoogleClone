import Image from "next/image";
function Avatar({url,className})
{
return <div className={`relative h-10 w-10 
cursor-pointer
transition duration-150 transform hover:scale-110 ${className}`}>
<Image src={url} alt="Profile" layout="fill" className="rounded-full"></Image>
</div>
}

export default Avatar;