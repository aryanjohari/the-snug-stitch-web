import { Link } from "react-router-dom";

export const Men = () => {
  const mens_all = [
    {
      name: "Bomber Jacket",
      image: "/images/products/men/bomberm1.jpg",
    },
    {
      name: "Anime Bomber",
      image: "/images/products/men/bomberm2.jpg",
    },
    {
      name: "Plain Hoodie",
      image: "/images/products/men/hoodie men plain.jpg",
    },
    {
      name: "Regular Hoodie",
      image: "/images/products/men/men hoodie regular.jpg",
    },
    {
      name: "Oversized Hoodie",
      image: "/images/products/men/men oversize hoodie.jpg",
    },
    {
      name: "Oversized Sweatshirt",
      image: "/images/products/men/men oversize sweatshirt.jpg",
    },
    {
      name: "Oversized Zipper",
      image: "/images/products/men/men oversize zipper.jpg",
    },
    {
      name: "Panel Hoodie",
      image: "/images/products/men/men panel hoodie.jpg",
    },
    {
      name: "Varsity Jacket",
      image: "/images/products/men/MEN VARSITY.jpg",
    },
    {
      name: "Vest",
      image: "/images/products/men/men vest.jpg",
    },
    {
      name: "Regular Zipper",
      image: "/images/products/men/men zipper regular.jpg",
    },
    {
      name: "Polo Neck",
      image: "/images/products/men/poloneck men.jpg",
    },
    {
      name: "Sleeveless Hoodie",
      image: "/images/products/men/without sleeve men.jpg",
    },
    {
      name: "Oversized Tshirt",
      image: "/images/products/men/oversize tshirt.jpg",
    },
    {
      name: "Regular Fit",
      image: "/images/products/men/regularfit tshirt men.jpg",
    },
    {
      name: "Regular Sweatshirt",
      image: "/images/products/men/sweatshirt men.jpg",
    },
  ];

  return (
    <div>
      <div
  class="sm:hidden divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white"
>
  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" >
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
    >
      <h2 class="text-lg font-medium">
        Men
      </h2>

      <span class="relative h-5 w-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

   <ul>
    <li>
      <Link to="/men-hoodies">
        Hoodies
      </Link>
    </li>
    <li>
      <Link to="/men-jackets">
        Jackets
      </Link>
    </li>
    <li>
      <Link to="/men-tshirts">
        Tshirts
      </Link>
    </li>
    <li>
      <Link to="/men-sweatshirts">
        Sweatshirts
      </Link>
    </li>
   </ul>
  </details>

  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
    >
      <h2 class="text-lg font-medium">
        Women
      </h2>

      <span class="relative h-5 w-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <ul>
    <li>
      <Link to="/women-hoodies">
        Hoodies
      </Link>
    </li>
    <li>
      <Link to="/women-jackets">
        Jackets
      </Link>
    </li>
    <li>
      <Link to="/women-tshirts">
        Tshirts
      </Link>
    </li>
    <li>
      <Link to="/women-sweatshirts">
        Sweatshirts
      </Link>
    </li>
   </ul>
    
  </details>

  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
    >
      <h2 class="text-lg font-medium">
        Kids
      </h2>

      <span class="relative h-5 w-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <ul>
    <li>
      <Link to="/kids-hoodies">
        Hoodies
      </Link>
    </li>
    <li>
      <Link to="/kids-jackets">
        Jackets
      </Link>
    </li>
    <li>
      <Link to="/kids-tshirts">
        Tshirts
      </Link>
    </li>
    <li>
      <Link to="/kids-sweatshirts">
        Sweatshirts
      </Link>
    </li>
   </ul>
    
  </details>
  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
    >
      <h2 class="text-lg font-medium">
        Accessories
      </h2>

      <span class="relative h-5 w-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
    <ul>
    <li>
      <Link to="/accessories">
        Accessories
      </Link>
    </li>
   </ul>
    
  </details>
</div>
    <div className="grid grid-cols-5">
      <div className="hidden sm:block sm:col-span-2 lg:col-span-1">
        <div className="flex h-screen flex-col border-e bg-white">
          <div className="px-4 py-6 border-b-2">
            <ul className="mt-6 space-y-2">
              <li>
                <a
                  href="/Men"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="/men-tshirts"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  T-shirts
                </a>
              </li>
              <li>
                <Link
                  to="/men-hoodies"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  to="/men-sweatshirts"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link
                  to="/men-jackets"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Jackets
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  to="/Men"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/Women"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/Kids"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/Accessories"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-4 mx-7 mt-10">
      <div className="sm:grid sm: grid-cols-3  hidden">
          <div className="font-extrabold text-center">
          &#8226; All Types of Customization available.
          </div>
          <div className="font-extrabold py-3 sm:py-0 text-center">&#8226; Colour options available</div>
          <div className="font-extrabold text-center">&#8226; All sizes available</div>
        </div>
        <div className="my-7 content-center">
          <h2 className="font-bold text-3xl">Mens Collection</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3">
          {mens_all.map((product) => {
            return (
              <Link to="/contact" className="block group hover:scale-110">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full rounded aspect-square shadow-lg h-72"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-700">
                    Click to get qoute!
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};
