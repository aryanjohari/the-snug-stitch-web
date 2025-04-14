import { Link } from "react-router-dom"

export const Works = () => {
    return(
        <div>
            <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-[100px] animate-typing py-5 mx-auto">
                Our Works
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
                src="/images/works/work1.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/works/work2.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
              <img
                src="images/works/work3.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
            <video src="/images/work8.mov" autoPlay loop
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
                ></video>
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="relative block group m-1">
              <img
                src="/images/works/work5.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/works/work6.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative block group m-1">
              <img
                src="images/works/work7.jpeg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-50 rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}