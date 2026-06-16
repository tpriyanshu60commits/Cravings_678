import cravingsLogo from "../assets/images/cravingsLogo.png";
import { Link } from "react-router-dom";
function Header()
{
    return(
        <> 
        <div className="bg-(--color-primary-hover) p-2 h-15">
            <div className="flex justify-between h-full items-center">
                <div className="w-20 ms-6">
                    <img src={cravingsLogo} alt=""className="w-full" />
                </div>
                <div className="flex gap-2">
                    <Link to="/home" className="text-(--color-text-light) text-lg border border-transparent hover:border hover:underline hover:border">Home</Link>
                    <Link to="/login"className="text-(--color-text-light) text-lg border border-transparent hover:border hover:underline">Login</Link>
                    <Link to="/register"className="text-(--color-text-light) text-lg border border-transparent hover:border hover:underline">Register</Link>
                    <Link to="/contactUs"className="text-(--color-text-light) text-lg border border-transparent hover:border hover:underline">ContactUS</Link>
                </div>
                
            </div>
        </div>
        </>
    );
}
export default Header;