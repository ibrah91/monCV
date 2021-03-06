import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { ImUserTie} from "react-icons/im";
import { FaStackOverflow } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

 const changeTheme = () =>{
   setTheme(theme=="light"?"dark":"light");
 }

  return (
    <>
      <Image  
        src="/media/12.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="200px"
        width="200px"
        layout="intrinsic"
        quality="100"
        />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-lime-700">Ibrahima</span> TRAORE
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Developer Full Stack PHP
      </p>
      {/* Resume */}
      <a
        href="/assets/ibrahima.pdf" 
        download="Ibrahima_Traore_cv.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500">
        <ImUserTie className="w-6 h-6 text-lime-700" />
        <span> &nbsp;&nbsp;Mon CV</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-lime-700 md:w-full ">
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/" aria-label="linkedin" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A" aria-label="Youtube">
          <FaStackOverflow className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Palaiseau, FRANCE </span>
        </div>
        <p className="my-2 ">Ibrahima.traore@live.fr</p>
        <p className="my-2">06.49.68.40.62</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ibrahima.traore@live.fr")}
      >
        Contactez-moi
      </button>
      {/*  */}
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
     
    </>
  );
};

export default Sidebar;
