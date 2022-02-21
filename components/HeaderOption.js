import { 
DotsVerticalIcon,
MapIcon,
NewspaperIcon,
PhotographIcon,
PlayIcon,
SearchIcon
}  from "@heroicons/react/outline"
import HeaderOpt from "./HeaderOpt";

function HeaderOption()
{
    return <div className="flex w-full justify-evenly text-gray-700 
    text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b pb-2">

        {/* Left */}

<div className="flex space-x-6">
<HeaderOpt Icon={SearchIcon} title={"All"} selected/>
<HeaderOpt Icon={PhotographIcon} title={"Images"} />
<HeaderOpt Icon={PlayIcon} title={"Videos"} />
<HeaderOpt Icon={NewspaperIcon} title={"News"} />
<HeaderOpt Icon={MapIcon} title={"Maps"} />
<HeaderOpt Icon={DotsVerticalIcon} title={"More"} />
</div>
        {/* Right */}
        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
}

export default HeaderOption;