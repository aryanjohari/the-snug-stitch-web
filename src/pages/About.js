import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-[100px] animate-typing py-5 mx-auto">
                About Us
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
      <section className="sm:mt-0 mt-36">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="Logo"
                  src="/images/aboutus.avif"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  About Us
                </h2>

                <p className="mt-4 text-gray-600">
                The Snug Stitch is a well-known provider of custom clothes
                  manufacturing, wholesale, and contract supply services. We
                  specialize in offering a wide range of t-shirts, hoodies and jackets allowing
                  customers to personalize their orders in terms of color, size,
                  cuts, and styles.The Snug Stitch has built a strong reputation
                  as the go-to supplier for start-ups, providing end-to-end
                  solutions encompassing design, printing, and packaging.
                  Additionally, they collaborate closely with corporate clients
                  to deliver top-notch garments and t-shirts tailored for events
                  and office use. With an extensive collection and diverse
                  quality options, The Snug Stitch excels in custom printing on
                  t-shirts, apparels, and fabrics. Their market reach extends
                  throughout India, catering to various customers seeking
                  customization. Their clientele includes start-ups, corporates,
                  resellers, distributors, wholesalers, retailers, and traders.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
