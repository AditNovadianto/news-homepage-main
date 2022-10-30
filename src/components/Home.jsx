import imageWeb3Mobile from "../images/image-web-3-mobile.jpg";
import imageWeb3Desktop from "../images/image-web-3-desktop.jpg";

const Home = () => {
  return (
    <div className="mt-10 md:mt-14 transition-all">
      <img
        className="m-auto md:hidden block"
        src={imageWeb3Mobile}
        alt="image-web-3-mobile"
      />

      <img
        className="md:block hidden"
        src={imageWeb3Desktop}
        alt="image-web-3-desktop"
      />

      <div className="md:flex items-center gap-10">
        <h1 className="font-Inter text-[40px] leading-10 mt-5 font-extrabold">
          The Bright Future of Web 3.0?
        </h1>

        <div className="mt-5">
          <p className="font-Inter text-Dark-grayish-blue text-[15px] leading-7">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="mt-5 px-8 py-3 hover:bg-Very-dark-blue transition-all bg-Soft-red uppercase text-Off-white tracking-[4px] font-normal font-Inter">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
