import imgHeart from "./../../assets/images/HeartBPM.svg";
import imgTemp from "./../../assets/images/temperature.svg";
import imgBread from "./../../assets/images/respiratory rate.svg";
import StateCharts from "../stateChart";

const DiagnosisHistory = () => {
  const data = [
    {
      bgcolor: "#E0F3FA",
      img: imgBread,
      title: "Respiratory Rate",
      rate: "20 bpm",
      state: "Normal",
    },
    {
      bgcolor: "#FFE6E9",
      img: imgTemp,
      title: "Temperature",
      rate: "98.6'F",
      state: "Normal",
    },
    {
      bgcolor: "#FFE6F1",
      img: imgHeart,
      title: "Heart Rate",
      rate: "78 bpm",
      state: "Normal",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-4 h-[675px]">
      <div className="text-24 text-test-color-072635 font-bold">
        Diagnosis History
      </div>
      <div className="mt-10 w-full h-[300px] bg-[#F4F0FE] rounded-lg p-4">
        <StateCharts />
      </div>
      <div className="flex flex-row justify-between gap-5 mt-5">
        {data.map((item) => (
          <div
            className="h-[242px] rounded-lg  flex-1 flex flex-col p-4"
            style={{
              backgroundColor: item.bgcolor,
            }}
          >
            <img src={item.img} alt="rate" className="w-24 h-24" />
            <p className="text-test-color-072635 text-[16px] mt-4">
              {item.title}
            </p>
            <div className="text-test-color-072635 text-[30px] font-bold">
              {item.rate}
            </div>
            <p className="text-test-color-072635 text-14 mt-[17px]">
              {item.state}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DiagnosisHistory;
