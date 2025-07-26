export const Heading = ({
    label,
    text_size
})=>{
    return(
        <div className= {`${text_size} font-bold text-gray-800 mb-2`}>
            {label}
        </div>
    )
}