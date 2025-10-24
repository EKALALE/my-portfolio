import myPhoto from "../assets/myPhoto.png";
import Hero from "./Hero";

function Home() {
  return (
    <div className="flex flex-col min-h-screen p-15">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-8 mt-10 space-x-6">
        {/* Left side - Hero content */}
        <div className="md:w-1/2 text-center md:text-left">
          <Hero />
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={myPhoto}
            alt="My portrait"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
