function Informations() {
    return (
        <div className="flex min-w-[440px] h-[505px] px-24 pt-12 gap-36">
            <div className="flex-col">
            <h1 className="font-poppins font-bold text-2xl text-black pb-12 items-center">Furniro.</h1>
            <span className="font-poppins font-normal text-base text-black/50">400 University Drive Suite 200 Coral <br></br>Gables,<br></br> FL 33134 USA</span>
              <h1 className="pt-52 font-poppins font-normal text-base">2025 Furniro. All rights reverved</h1>
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

            <div className="">
            <h3 className="font-poppins font-medium text-base text-black/50 pb-11">Newsletter</h3>
            <label className="relative">
            <input className="w-72 h-10 border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-m transition duration-200 px-2 bg-inherit" type="text" />
            <span className="absolute left-0 top-0 mx-2 transition duration-200 input-text bg-white">Enter Your Email</span>
            </label>
            <a href="#">
                <button className="font-poppins font-semibold text-xl items-center ml-8 underline underline-offset-8 hover:border-b">Subscribe</button>
            </a>
            </div>
           </div>
        </div>
    )
}

export default Informations