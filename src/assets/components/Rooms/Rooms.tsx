function Rooms() {
    return (
        <section className="">
        <div className="text-center">
           <h1 className="font-poppins font-bold text-3xl text-black/80 pb-2">Browse the Range</h1>
           <span className="font-poppins font-normal text-xl text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatum.</span>
        </div>

      <div className="flex justify-center pt-16">
      <div className="flex items-center gap-5">
          <a href="#">
            <img src="./src/assets/dining.png" alt=""/>
            <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Dining</h1>
          </a>

          <a href="#">
            <img src="./src/assets/living.png" alt=""/>
            <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Dining</h1>
          </a>

          <a href="#">
            <img src="./src/assets/bedroom.png" alt=""/>
            <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Dining</h1>
          </a>
        </div>
        </div>
      </section>
    )
}

export default Rooms