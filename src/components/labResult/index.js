import imgDownload from "./../../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

const LabResult = () => {
  const labData = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
  ];
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-2xl h-full overflow-y-auto p-4">
        <h2 className="text-test-color-072635 text-[24px] font-bold mb-3">
          Lab Results
        </h2>
        <div className="overflow-y-scroll h-full scrollable-container">
          {labData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between w-[315px] h-[40px] hover:bg-gray-100 px-4"
            >
              <p>{item}</p>
              <img src={imgDownload} alt="Download" className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LabResult;
