export function InputBox({label,placeholder,onChange}){
    return (
        <div>
            <div className="text-md font-bold text-gray-700 pt-1  pb-2 text-left">{label}</div>

            <input type="text" placeholder={placeholder} className="block w-full pl-2 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white/80 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" onChange={onChange} />
        </div>
    )
}