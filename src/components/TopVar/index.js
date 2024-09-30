import TechLogo from "./../../assets/Logo/TestLogo.svg";
import imgHome from "./img/home.svg";
import imgMember from "./img/group.svg";
import imgCal from "./img/calendar.svg";
import imgChat from "./img/chat.svg";
import imgCredit from "./img/creditcard.svg";
import imgDoc from "./img/doctor/Jose.png";
import imgGear from "./img/settings_FILL0_wght300_GRAD0_opsz24/setting.png";
import imgMore from "./img/more/more-lg.png";

const NavMenu = [
  {
    img: imgHome,
    title: "Overview",
    acitive: false,
  },
  {
    img: imgMember,
    title: "Patients",
    acitive: true,
  },
  {
    img: imgCal,
    title: "Schedule",
    acitive: false,
  },
  {
    img: imgChat,
    title: "Message",
    acitive: false,
  },
  {
    img: imgCredit,
    title: "Transactions",
    acitive: false,
  },
];

const TopVar = () => {
  return (
    <>
      <div className="h-[72px] rounded-full bg-white flex flex-row justify-between items-center p-[32px]">
        <div className="h-[48px]">
          <img src={TechLogo} alt="logo" />
        </div>
        <div className="flex flex-row gap-[40px] h-[48px]">
          {NavMenu.map((item, idx) => (
            <div
              key={idx}
              className={
                item.acitive === false
                  ? "flex items-center justify-center"
                  : "flex items-center justify-center rounded-full bg-[#01F0D0] px-5"
              }
            >
              <div className="p-2 flex flex-row gap-2 items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="flex items-center justify-center"
                />
                <p className="font-bold hidden xl:block">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row h-[48px] items-center gap-2">
          <img className="rounded-full aspect-[1/1]" src={imgDoc} alt="doc" />
          <div className="hidden xl:flex-col justify-between p-1 xl:flex">
            <p className="font-bold">Dr.&nbsp;Jose Simmons</p>
            <p className="text-test-color-707070">General Practitoner</p>
          </div>
          <img className="aspect-[1/1]" src={imgGear} alt="setting" />
          <img className="aspect-[1/1]" src={imgMore} alt="more" />
        </div>
      </div>
    </>
  );
};

export default TopVar;
