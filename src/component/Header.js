import { Link } from "react-router";

const Header=()=>{
    return(
        <div className="flex justify-between bg-white  py-5 border-b-2 sticky top-0 overflow-hidden">
            <div className="w-36 mx-14 cursor-pointer">
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"></img>
            </div>
            <div >
                <ul className="flex gap-9  font-bold text-orange-400 ">
                   <Link to="/"> <li className="cursor-pointer hover:text-orange-600">Home</li></Link>
                    <Link to="/about"><li className="cursor-pointer hover:text-orange-600">About</li></Link>
                    <Link to="/contact"><li className="cursor-pointer hover:text-orange-600">Contact</li></Link>
                    <Link to="/user"><li className="cursor-pointer hover:text-orange-600">User</li></Link>
                   <Link to="https://github.com/Rahul1Pandey"><li className="cursor-pointer hover:text-orange-600">Github</li></Link> 
                </ul>
            </div>
            <div className="flex gap-8 mr-14 ">
                <div className="cursor-pointer hover:bg-gray-100 rounded-lg ">
                    <h2 className="p-2">Login</h2>
                </div>
                <div className="bg-red-500 rounded-lg text-white font-bold h-10 hover:bg-red-700 cursor-pointer ">
                    <h1 className="p-2">Get started</h1>
                </div>
            </div>
           

        </div>
    )
}

export default Header;