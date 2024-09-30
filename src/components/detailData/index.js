import Photo from "./../../assets/images/Layer 2/Layer 2.png";
import imgCal from "./../../assets/images/BirthIcon.svg";
import imgGender from "./../../assets/images/FemaleIcon.svg";
import imgPhone from "./../../assets/images/PhoneIcon.svg";
import imgGuard from "./../../assets/images/InsuranceIcon.svg";
import { useEffect, useState } from "react";
import { getDataFromServer } from "../../api";

const Item = ({ img, title, content }) => {
  return (
    <div className="flex items-center h-[42px]">
      <img
        className="w-[42px] h-[42px] mr-3 rounded-full"
        src={img}
        alt={title}
      />
      <div className="flex flex-col">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-gray-600 font-bold">{content}</p>
      </div>
    </div>
  );
};

const DetailData = () => {
  const [data, setData] = useState([]);
  const [targetData, setTargetData] = useState({});
  useEffect(() => {
    getDataFromServer(setData);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => item.name === "Jessica Taylor");
    setTargetData(filteredData[0]);
  }, [data]);

  useEffect(() => {
    console.log("targetData", targetData);
  }, [targetData]);

  return (
    <div className="bg-white lg:flex lg:flex-col hidden justify-center py-5 items-center rounded-2xl">
      <img
        className="w-[200px] h-[200px] object-cover"
        src={targetData.profile_picture}
        alt="Detail Image"
      />
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-test-color-072635">
          {targetData.name}
        </h2>
      </div>
      <div className="flex flex-col gap-[24px] mb-[41px] mt-[32px] w-full px-5">
        <Item
          img={imgCal}
          title={"Date Of Birth"}
          content={targetData.date_of_birth}
        />
        <Item img={imgGender} title={"Gender"} content={targetData.gender} />
        <Item
          img={imgPhone}
          title={"Contact Info."}
          content={targetData.phone_number}
        />
        <Item
          img={imgPhone}
          title={"Emergency Contacts"}
          content={targetData.emergency_contact}
        />
        <Item
          img={imgGuard}
          title={"Insurance Provider"}
          content={targetData.insurance_type}
        />
      </div>
      <div className="bg-[#01F0D0] w-[220px] h-[41px] rounded-full text-test-color-072635 text-center font-bold items-center flex justify-center mb-4 hover:cursor-pointer hover:bg-[#01FFD0]">
        Show All Information
      </div>
    </div>
  );
};

export default DetailData;
