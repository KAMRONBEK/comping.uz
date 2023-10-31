import LogoImage from "../../assets/icons/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button/Button";
export type NavModalType = {
  openModal?: boolean;
  setOpenModal?: any;
  isScrolled?: any;
};
const data = [
  {
    id: 0,
    title: "ABOUT",
    link: "/about",
  },
  {
    id: 0,
    title: "SERVICES",
    link: "/services",
  },
  {
    id: 0,
    title: "TECHNOLOGIES",
    link: "/technologies",
  },
  {
    id: 0,
    title: "HOW TO",
    link: "/howto",
  },
];
const NavModal = (props: NavModalType) => {
  return (
    <div
      className={` ${
        props.openModal ? "right-0" : "-right-[100%]"
      } transition-all ease-in-out  z-50 overflow-auto fixed top-0  w-full h-[100%] flex justify-end `}
      onClick={() => props.setOpenModal(false)}
    >
      <div className="p-8 bg-[#221f2e]  sm:w-[500px] w-full h-full  ">
        <button
          className=" absolute top-5 right-4"
          onClick={() => props.setOpenModal(false)}
        >
          <AiOutlineClose color="#fff" />
        </button>
        <div className="cursor-pointer flex  items-center ">
          <div className="z-1 relative">
            <img
              src={LogoImage}
              className="md:w-[102px] md:h-[103px] w-[69px] h-[70px]"
            />
          </div>

          <div className=" text-[#C0B7E8] xl:text-[40px] lg:text-[30px] md:text-[20px] uppercase ml-[5px]">
            <h1>Comping.Uz</h1>
          </div>
        </div>

        <ul className="w-full flex flex-col justify-between mt-[30px]">
          {data.map((item, index) => {
            return (
              <li
                className="text-white text-[12px] font-bold xl:mr-[42px]  mb-[15px]"
                key={index.toString()}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <div className=" flex sm:flex-row flex-col  sm:items-center items-start  mt-[40px]">
          <Button
            text={"CONTACT US"}
            onClick={undefined}
            className={
              "hover:bg-[#8176AF] hover:text[#343045] cursor-pointer hover:border-[#8176AF] border-[2px]  sm:mr-[10px]  sm:w-[50%] w-full sm:mb-0 mb-[20px] "
            }
          ></Button>
          <Button
            text={"JOIN HYDRA"}
            onClick={undefined}
            className={
              "hover:bg-[#8176AF] hover:text[#343045] cursor-pointer hover:border-[#8176AF] border-[2px] sm:ml-[10px] sm:w-[50%] w-full"
            }
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
