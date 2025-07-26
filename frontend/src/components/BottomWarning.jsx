import {Link} from "react-router-dom";
export function BottomWarning({label ,linkLabel,link}){
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link className="text-black underline font-semibold ml-1" to={link}>
                {linkLabel}
            </Link>
        </div>
    )
}