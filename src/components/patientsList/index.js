import PatientItem from "../patientItem";
import patientsData from "./Data";
import imgSearch from "./img/search_FILL0_wght300_GRAD0_opsz24.svg";

const PatientsList = () => {
  return (
    <>
      <div className="bg-white rounded-xl pt-5 h-full flex flex-col">
        <div className="flex items-center justify-between gap-5 mb-10 px-5">
          <div className="text-test-color-072635 text-24 font-bold">
            Patients
          </div>
          <img src={imgSearch} alt="search" />
        </div>
        <div className=" overflow-y-auto scrollable-container flex-1">
          {patientsData.map((item, idx) => (
            <PatientItem item={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientsList;
