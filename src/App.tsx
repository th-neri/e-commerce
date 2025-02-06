import { VscAccount } from "react-icons/vsc";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Rooms from "./components/Rooms/Rooms";
import Products from "./components/Products/Products";
import Gallery from "./components/Gallery/Gallery";

function App() {

  return (
    <div>
      
      <header className="flex pl-14 py-7 pr-24  justify-between w-[300px]h-[100px] items-center">
        <div className="flex font-montserrat font-bold text-4xl gap-1">
          <img src="./src/assets/logo.svg" alt="" />
          <span>Furniro</span>
        </div>

        <div className="gap-20 flex items-center font-poppins font-medium text-lg">
          <nav>
            <ul>
              <a href="">
                <li>Home</li>
              </a>
            </ul>
          </nav>


          <nav>
            <ul>
              <a href="">
                <li>Shop</li>
              </a>
            </ul>
          </nav>

          <nav>
            <ul>
              <a href="">
                <li>About</li>
              </a>
            </ul>
          </nav>

          <nav>
            <ul>
              <a href="">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center gap-10">
          <div className="flex items-center">
            <a href="">
              <VscAccount size={28} />
            </a>
          </div>

          <div className="flex items-center">
            <a href="">
              <IoIosSearch size={28} />
            </a>
          </div>

          <div className="flex items-center">
            <a href="">
              <IoIosHeartEmpty size={28} />
            </a>
          </div>

          <div className="flex items-center">
            <a href="">
              <LuShoppingCart size={28} />
            </a>
          </div>
        </div>
      </header>
      
      <section className="bg-[url(./src/assets/background.png)] min-h-[1007px] bg-no-repeat bg-cover pt-20">
      <section>
      <div className="w-[643px] h-[443px] bg-orange-50 absolute right-12 top-[428px] rounded-lg">
         <div className="flex-col pl-10 pr-11 pt-16 pb-9">
          <span className="font-poppins font-semibold text-lg">New arrival</span>
          <h1 className="font-poppins font-bold text-5xl text-m pt-2">Discover Our</h1>
          <h1 className="font-poppins font-bold text-5xl text-m pb-4">New Collection</h1> 
          <span className="font-poppins font-medium text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus dolores nesciunt dolorem.</span>
         </div>
         <a href="#">
            <button className="ml-10 w-[222px] h-[74px] bg-m text-white font-poppins font-bold text-lg">Buy Now</button>
          </a>
      </div>
      </section>
      </section>

      <section className="flex px-32 pt-14 justify-center">
        <div className="text-center">
           <h1 className="font-poppins font-bold text-3xl text-black/80 pb-2">Browse the Range</h1>
           <span className="font-poppins font-normal text-xl text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatum.</span>
           <Rooms />
        </div>
      </section>

      <section className="pl-48 pt-14 justify-center">
          <h1 className="text-center font-poppins font-bold text-4xl text-black/80 pb-8">Our products</h1>
          <Products />
      </section>

      <section className="px-28 pt-16 flex justify-center">
        <Gallery />
        </section>
    </div>



  )
}

export default App
