import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Gallery() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };    

    return (
      <div className="flex items-center justify-center pl-36 pr-11">
        <div className="flex-col pt-56">
        <h1 className="font-poppins font-bold text-5xl text-black/80">Beautiful rooms inspirations</h1>
        <h1 className="font-poppins font-bold text-5xl text-black/80"></h1>
        <span className="font-poppins font-medium text-base text-black/50 pt-2">Our designer already made a lot of beautiful <br></br>prototipe of rooms that inspire you</span>

        <div className="pt-6">
            <a href="">
                <button className="font-poppins font-semibold text-base bg-m py-3 px-9 text-white">Explore More</button>
            </a>
        </div>
        </div>

        <div className="pl-11 flex relative items-center gap-6">
            <FaChevronLeft onClick={slideLeft} size={40} className="text-m"/>
            <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
            <img className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/rooms-1.png" alt="" />

            <img className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/rooms-2.png" alt="" />

            <img className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/rooms-3.png" alt="" />

            <img className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/rooms-4.png" alt="" />

        
            </div>
            <FaChevronRight onClick={slideRight} size={40} className="text-m"/>
        </div>
      </div>
    )
}

export default Gallery