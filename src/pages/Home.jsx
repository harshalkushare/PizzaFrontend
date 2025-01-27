import { ArrowRightFilled } from "../components/icons/ArrowRightFilled";
import pizzaImage from "../assets/images/pizza2.png";
import cookingImage from "../assets/images/cooking1.png";
import { BadgeCheck } from "../components/icons/CheckMark";

function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
          <div className="flex justify-center text-4xl md:justify-normal">
            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
              Enjoy the Slice{" "}
            </h1>
            <h1>😋</h1>
          </div>
          <p className="pb-4 text-[#6B7280]">
            The Pizza App lets you order your favourite pizza from the comfort
            of your home.Enjoy the best pizza in town with just a few clicks.
          </p>
          <button className="flex items-center px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md group">
            Order Now
            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
              <ArrowRightFilled />
            </span>
          </button>
        </div>
        <div>
          <img src={pizzaImage} alt="Pizza" width={550} height={550} />
        </div>
      </section>
      {/* Service Section  */}
      <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="container flex flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
            <img
              width={500}
              src={cookingImage}
              alt="cooking"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div>
                <h2 className="mb-2 text-5xl font-extrabold text-transparent  bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                  Cooked by the best
                  <br />
                  Chefs in the world
                </h2>
                <p className="text-base leading-relaxed text-[#6B7280]">
                  There are many benefits regarding to that but the main onces
                  are:
                </p>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex text-2xl items-center h-full p-2 rounded">
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4"/>
                <span className="font-bold title-font">Perfect test</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex text-2xl items-center h-full p-2 rounded">
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4"/>
                <span className="font-bold title-font">Prepared quickly</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex text-2xl items-center h-full p-2 rounded">
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4"/>
                <span className="font-bold title-font">Guarented food hygeine</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
