import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 px-4 bg-blue-400 text-xl">
            <div className="text-left ml-4 text-white ">
                <Link to="/">Home</Link>
            </div>
            <div className="flex items-center justify-end space-x-4 mr-10 gap:10 text-white">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
}

export { Navbar };
