function Navbar() {
    return(
        <div className="bg-black text-white p-2">
            <nav>
                <ul className="flex">
                    <li className="my-auto">
                        <img className="w-[86px]" src="https://www.boominatiworldwide.com/files/2022/11/Logo-1-150x125.png" />    
                    </li> 
                    <li className="my-auto">
                        <ul className="text-xl flex gap-6">
                            <li><a href="">HOME</a></li>
                            <li><a href="">VIDEOS</a></li>
                            <li><a href="">TOUR</a></li>
                            <li><a href="">SHOP</a></li>
                            <li><a href="">SIGN UP</a></li>
                            <li><a href="">CREDITS</a></li>
                        </ul>
                    </li>               
                    
                </ul>


            </nav>
        </div>
    )
}

export default Navbar