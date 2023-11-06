import { MenuIcon } from "../../assets/icons/icons";
import LogoImage from "../../assets/icons/logo.png";
import Button from "../button/Button";
import { NavModalType } from "../navModal/NavModal";
const data = [
  {
    id: 0,
    title: "Mahsulotlar",
    link: "/#about",
  },
  {
    id: 0,
    title: "XIZMATLAR",
    link: "/#services",
  },
  {
    id: 0,
    title: "TEXNOLOGIYALAR",
    link: "/#technologies",
  },
  {
    id: 0,
    title: "QANDAY",
    link: "/#howto",
  },
];
function Navbar(props: NavModalType) {
  return (
    <div className=" relative w-full ">
      <div
        className={`${
          props.isScrolled
            ? "fixed top-0  w-full 2xl:w-[1440px] xl:px-[84px] xs:px-[24px]   bg-[#302C42] z-50"
            : "relative"
        } w-full  sm:flex sm:items-center  justify-between xl:px-[84px] xs:px-[24px] `}
      >
        <div className="w-full flex  items-center justify-between ">
          <a
            href="/"
            role="tab"
            aria-selected="true"
            data-testid="select-about_us"
          >
            <div className="cursor-pointer flex items-center">
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
          </a>
          <ul className="items-center lg:flex hidden">
            {data.map((item, index) => {
              return (
                <a
                  href={item.link}
                  key={index.toString()}
                  role="tab"
                  aria-selected="true"
                  data-testid="select-about_us"
                  className="text-white text-[12px] font-bold xl:mr-[42px] mr-[10px] uppercase "
                >
                  {item.title}
                </a>
              );
            })}
          </ul>
          <div className="lg:flex hidden items-center  ">
            <Button
              text={"BOG'LANISH"}
              onClick={undefined}
              className={
                "hover:bg-[#8176AF] hover:text[#343045] cursor-pointer hover:border-[#8176AF] border-[2px] mr-[10px]"
              }
            ></Button>
            <Button
              text={"QO'SHILING"}
              onClick={undefined}
              className={
                "hover:bg-[#8176AF] hover:text[#343045] cursor-pointer hover:border-[#8176AF] border-[2px] ml-[10px]"
              }
            ></Button>
          </div>
          <div
            className="flex lg:hidden"
            onClick={() => props.setOpenModal(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
