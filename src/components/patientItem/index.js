import imgMore from "./img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

const PatientItem = ({ item }) => {
  return (
    <div
      className={
        item.active === true
          ? "flex flex-row h-[80px] w-full justify-between bg-activestate-bg-2 px-5 items-center hover:bg-[#D8FCF755]"
          : "flex flex-row h-[80px] w-full justify-between px-5 items-center hover:bg-[#D8FCF755]"
      }
    >
      <div className="flex flex-row gap-3 h-[48px]">
        <img
          className="w-rull h-full rounded-full"
          src={item.img}
          alt={item.name}
        />
        <div className="flex-col  flex justify-center">
          <div className="text-sm font-medium">{item.name}</div>
          <div className="text-xs text-gray-500">
            {item.gender}, {item.age}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src={imgMore} alt="more" className="w-18 h-[4px]" />
      </div>
    </div>
  );
};
export default PatientItem;
