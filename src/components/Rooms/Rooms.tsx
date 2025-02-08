function Rooms() {
  return (

    <div className="flex justify-center pt-16 items-center">
      <div className="flex items-center gap-5">
        <a href="#">
          <img className="min-w-[300px] min-h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/dining.png" alt="" />
          <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Dining</h1>
        </a>

        <a href="#">
          <img className="min-w-[300px] min-h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/living.png" alt="" />
          <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Living</h1>
        </a>

        <a href="#">
          <img className="min-w-[300px] min-h-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src="./src/assets/bedroom.png" alt="" />
          <h1 className="text-center pt-8 font-poppins font-semibold text-2xl text-black/80">Bedroom</h1>
        </a>
      </div>
    </div>
  )
}

export default Rooms