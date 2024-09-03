// import React from 'react'
import Navbar from "../components/navbar";
import img from "../assets/hero-cover-1.png";
import wins from "../assets/icon cool-icon-153.svg";
import conc from "../assets/icon cool-icon-1153.svg";
// import over from "../assets/uil_arrow-grow.png";
import BrandLogo from "../components/brands-logo";
import FeaturedProduct from "../components/featured-comp";
// import col from "../assets/col-md-6(1).png";

function Home() {
  return (
    <div className="justify-center items-center h-full">
      <Navbar />
      <div className="mx-auto w-[1292px] flex rounded-xl bg-slate-500 mt-20 h-[619px] justify-center items-center">
        <div className="my-auto">
          <p>SUMMER 2024</p>
          <p className="mt-4 mb-4 text-violet-900 text-3xl">NEW COLLECTION</p>
          <p>
            We know how large objects will act. <br />
            but things on a small scale
          </p>
          <button className="mt-7 bg-blue-600 rounded-xl text-white text-2xl w-[221px] h-[62px]">
            SHOP NOW
          </button>
        </div>
        <div>
          <img src={img} className="w-[612px] h-auto" />
        </div>
      </div>
      <BrandLogo className="" />

      <div className="mt-19 flex items-center w-[1050px] h-[498px] col-span-2 justify-center">
        {/* <img src={col} /> */}
        <div className="w-[447px] h-[246px] ">
          <p className="text-violet-700 text-2xl">Featured Products</p>
          <p>We love what we do</p>
          <p className="text-gray-700">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
            <br />
            <br />
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      <div className="mt-6 items-center justify-center w-[1050px] h-[616px]">
        <p className="text-gray-700 text-3xl">Featured Products</p>
        <p className="mt-3 mb-3 text-violet-900 text-2xl">THE BEST SERVICES</p>
        <p className="text-gray-700">
          Problems trying to resolve the conflict between{" "}
        </p>
        <div className="items-center col-span-3 w-full h-auto">
          <FeaturedProduct
            img={wins}
            title="Easy Wins"
            details="Get your best looking smile now!"
          />
          <FeaturedProduct
            img={conc}
            title="Hack Growth"
            details="Overcame any hurdle or any other problem."
          />
          <FeaturedProduct
            // img={over}
            title="Concrete"
            details="Defalcate is most focused in helping you discover your most beautiful smile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
