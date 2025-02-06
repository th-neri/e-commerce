function Informations() {
    return (
        <div className="flex w-[2440px] h-[505px] px-24 pt-12 gap-36">
            <div className="flex-col">
            <h1 className="font-poppins font-bold text-2xl text-black pb-12 items-center">Furniro.</h1>
            <span className="font-poppins font-normal text-base text-black/50">400 University Drive Suite 200 Coral <br></br>Gables,<br></br> FL 33134 USA</span>
            </div>

           <div className="flex gap-36">
           <div className="">
                <h3 className="font-poppins font-medium text-base text-black/50 pb-14">Links</h3>
                <ul className="">
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black pb-11">Home</li>
                    </a>
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black pb-11">Shop</li>
                    </a>
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black pb-11">About</li>
                    </a>
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black">Contact</li>
                    </a>
                </ul>
            </div>

            <div className="">
                <h3 className="font-poppins font-medium text-base text-black/50 pb-14">Help</h3>
                <ul className="">
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black pb-11">Payment Options</li>
                    </a>
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black pb-11">Return</li>
                    </a>
                    <a href="#">
                    <li className="font-poppins font-medium text-base text-black">Privacy Policies</li>
                    </a>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default Informations