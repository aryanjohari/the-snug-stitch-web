import { Contact } from "../pages/Contact";

const HomeCarousel = () => {
  let imglist = [
    "/images/banner 1.jpg",
    "/images/banner2.jpg",
    "/images/banner 3.jpg",
    "/images/banner4.jpg",
  ];

  let imgno = 1;
  setInterval(() => {
    if (document.getElementById("crousalimg") !== null) {
      document.getElementById("crousalimg").src = imglist[imgno];
      imgno++;

      if (imgno >= imglist.length) {
        imgno = 0;
      }
    }
  }, 3000);
  return (
    <div>
      <div className="w-screen">
        <a href="Contact">
        <img id="crousalimg" src="/images/banner1.jpg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default HomeCarousel;
