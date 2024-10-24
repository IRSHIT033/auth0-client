import { NavBarButtons } from "@/components/navigation/desktop/navbar-buttons";
import hopprLogo from "../assets/hoppr-logo.png";

const HomePage = () => {
  return (
    <section className="w-full h-screen bg-gray-50 py-20 flex flex-col justify-center items-center ">
      <div className="flex items-center">
        <img src={hopprLogo} alt="Hopper Logo" className="h-50 w-auto" />
        <span className="ml-3 text-6xl font-bold text-gray-800">Hopper</span>
      </div>
      <h1 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900   dark:text-white">
        Delivering an API for the First AI Foundation Model to Revolutionize
        Medical Imaging
      </h1>
      <NavBarButtons />

      {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center" />
      <div className="flex items-center">
        <img src={hopprLogo} alt="Hopper Logo" className="h-50 w-auto" />
        <span className="ml-3 text-6xl font-bold text-gray-800">Hopper</span>
      </div>
      <NavBarButtons /> */}
    </section>
  );
};

export default HomePage;
