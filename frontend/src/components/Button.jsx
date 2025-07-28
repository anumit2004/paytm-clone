export function Button({label , onClick, bgColor = "bg-black", hoverColor = "hover:bg-gray-700"}) {
    return (
        <button onClick={onClick} className={`text-white px-3 py-3 ${bgColor} my-2 mt-5 rounded-md ${hoverColor} transition duration-300 ease-in-out w-full`}>
            {label}
        </button>
        
    )
}