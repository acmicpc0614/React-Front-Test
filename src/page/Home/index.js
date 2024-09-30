import DetailData from "../../components/detailData";
import DiagnosisHistory from "../../components/diagnosisHistory";
import DiagnosisList from "../../components/diagnosisList";
import LabResult from "../../components/labResult";
import PatientsList from "../../components/patientsList";
import TopVar from "../../components/TopVar";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center h-screen min-w-[1776px] p-4">
      <div className="container h-full flex flex-col ">
        <TopVar />
        <div className="flex flex-1 gap-[32px] mt-[32px] h-full">
          <div className="flex-1 h-full">
            <PatientsList />
          </div>
          <div className="flex flex-col gap-4 h-full flex-[2]">
            <DiagnosisHistory />
            <DiagnosisList />
          </div>
          <div className="flex flex-1 h-full flex-col gap-4">
            <DetailData />
            <LabResult />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
