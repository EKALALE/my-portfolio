import myPhoto from "../assets/myPhoto.png";
import Hero from "./Hero";

function Home() {
  return (
    <div className="flex flex-col min-h-screen px-5 py-6 md:px-10 md:py-10">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow gap-3 md:gap-6 mt-2 md:mt-6">
        {/* Left side - Hero content */}
        <div className="w-full md:w-1/2">
          <Hero />
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={myPhoto}
            alt="My portrait"
            className="w-[82vw] max-w-[20rem] aspect-square object-cover rounded-full shadow-lg md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
