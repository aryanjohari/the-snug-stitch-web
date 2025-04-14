import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-[100px] animate-typing py-5 mx-auto">
                Services
              </h1>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white hover:bg-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  to="/products"
                >
                  View Products
                </Link>
                <Link
                  className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  to="/contact"
                >
                  Become a Client
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="flex flex-wrap mt-10">
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="/images/services/varsity.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  College Varsity jackets
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/services/cafe uniform.webp"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Cafe Tshirt
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
              <img
                src="images/services/family tshirts.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Custom Family Tshirts
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
              <img
                src="images/services/dance events.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Dance Events
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
              <img
                src="/images/services/cricket-team-jesey.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Cricket Team Jersey
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/services/Custom designs.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Custom Designs
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/services/Community Outings.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
              <div className="h-full w-full absolute translate-y-[-100%] text-center flex opacity-0 hover:opacity-100">
                <h3 className="lg:text-[45px] font-extrabold text-black m-auto uppercase monospace">
                  Community Outings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
