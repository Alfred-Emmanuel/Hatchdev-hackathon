import Navbar from "../components/navbar";
import img from "../assets/hero-cover-1.png";
import wins from "../assets/icon cool-icon-153.svg";
import conc from "../assets/icon cool-icon-1153.svg";
import over from "../assets/uil_arrow-growth.png";
import BrandLogo from "../components/brands-logo";
import FeaturedProduct from "../components/featured-comp";
import col from "../assets/col-md-6 (1).png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="font-montserrat justify-center items-center h-full">
      <Navbar />
      <div className="pt-20 mx-auto px-4 lg:px-0 w-full lg:w-[1292px] flex flex-col lg:flex-row rounded-xl bg-custom-gradient mt-20 h-auto lg:h-[619px] justify-center items-center">
        <div className="my-auto text-center lg:text-left px-4 lg:px-0">
          <p>SUMMER 2024</p>
          <p className="mt-4 mb-4 text-violet-900 font-700 text-3xl">
            NEW COLLECTION
          </p>
          <p className="font-400">
            We know how large objects will act. <br />
            but things on a small scale
          </p>
          <button className="font-700 mt-7 bg-blue-600 rounded-xl text-white text-2xl w-[221px] h-[62px]">
            SHOP NOW
          </button>
        </div>
        <div className="mt-6 lg:mt-0">
          <img src={img} className="w-full lg:w-[612px] h-auto" alt="Hero" />
        </div>
      </div>

      <BrandLogo />

      <div className="mt-9 mb-8 mx-auto gap-4 flex flex-col lg:flex-row items-center w-full lg:w-[1050px] h-auto lg:h-[498px] justify-center">
        <img src={col} className="w-full lg:w-auto h-auto" alt="Column Image" />
        <div className="ml-0 lg:ml-8 w-full lg:w-[447px] h-auto">
          <p className="text-gray-700 text-2xl font-700">Featured Products</p>
          <h2 className="text-dark-900 mt-3 font-700 text-3xl mb-3">
            We love what we do
          </h2>
          <p className="text-gray-700 font-400">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
            <br />
            <br />
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="text-center mt-6 mx-auto pt-10 items-center justify-center w-full lg:w-[1050px] h-auto lg:h-[616px]">
        <p className="font-400 text-gray-700 text-3xl">Featured Products</p>
        <p className="font-700 mt-3 mb-3 text-violet-900 text-2xl">
          THE BEST SERVICES
        </p>
        <p className="text-gray-700 font-400">
          Problems trying to resolve the conflict between
        </p>
        <div className="mx-auto flex flex-col lg:flex-row gap-6 mt-9 w-full h-auto items-center justify-center">
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
      <Footer />
    </div>
  );
}

export default Home;
