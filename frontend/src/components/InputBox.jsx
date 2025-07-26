export function InputBox({label,placeholder,onChange}){
    return (
        <div>
            <div className="text-md font-bold text-gray-700 pt-1  pb-2 text-left">{label}</div>

            <input type="text" placeholder={placeholder} className="border border-gray-300 rounded-md p-2 mb-3 w-full" onChange={onChange} />
        </div>
    )
}