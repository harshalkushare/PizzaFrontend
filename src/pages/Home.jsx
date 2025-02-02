import { ArrowRightFilled } from "../components/icons/ArrowRightFilled";
import pizzaImage from "../assets/images/pizza2.png";
import cookingImage from "../assets/images/cooking1.png";
import { BadgeCheck } from "../components/icons/CheckMark";
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "../Redux/slices/ProductSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    //This will be call when components mounts
    dispatch(getAllProduct());
  },[])

  const {productData} = useSelector((state) => state.product)

  return (
    <Layout>
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
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">Perfect test</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex text-2xl items-center h-full p-2 rounded">
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">Prepared quickly</span>
              </div>
            </div>
            <div className="w-full p-1">
              <div className="flex text-2xl items-center h-full p-2 rounded">
                <BadgeCheck className="text-[#F38339] w-10 h-10 mr-4" />
                <span className="font-bold title-font">
                  Guarented food hygeine
                </span>
              </div>
            </div>
            <div className="py-4 px-5 mx-auto">
                  <div className="flex justify-center py-4">
                         <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                  </div>
            </div>
              <div className="bg-transparent py-10 px-5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {/* Order Food */}
                  <div className="bg-transparent p-6 rounded-lg ">
                    <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full mx-auto">
                      {/* Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Order Food!</h3>
                    <p className="mt-2 text-gray-600">
                      As easy as never ever before! Now with our advanced stuff,
                      ordering food is a piece of cake!
                    </p>
                  </div>

                  {/* Pickup Food */}
                  <div className="bg-transparent p-6 rounded-lg">
                    <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full mx-auto">
                      {/* Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h11l4 8H3l4-8z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Pickup Food!</h3>
                    <p className="mt-2 text-gray-600">
                      Pick-Up your food if you are taking it away or just seat,
                      relax and have it on your table when ready!
                    </p>
                  </div>
                  
                  {/* Enjoy Food */}
                  <div className="bg-transparent p-6 rounded-lg">
                    <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full mx-auto">
                      {/* Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 10h16M10 14h4"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Enjoy Food!</h3>
                    <p className="mt-2 text-gray-600">
                      As soon as you get your food, you can enjoy it till the
                      last piece of it and come back soon for another one!
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      {productData.map((product) => <div key={product._id}>{product.productName}</div>)}
      </div>
    </Layout>
  );
}

export default Home;
