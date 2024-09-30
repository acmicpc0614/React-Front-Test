import React from "react";
import DataTable from "../dataTable";

const DiagnosisList = () => {
  const data = React.useMemo(
    () => [
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Type 2 Diabetes",
        desc: "Insulin resistance and elevated blood sugar",
        status: "Cured",
      },
      {
        prob: "Asthma",
        desc: "Recurrent episodes of bronchial constriction",
        status: "Inactive",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Type 2 Diabetes",
        desc: "Insulin resistance and elevated blood sugar",
        status: "Cured",
      },
      {
        prob: "Asthma",
        desc: "Recurrent episodes of bronchial constriction",
        status: "Inactive",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
      {
        prob: "Hypertension",
        desc: "Chronic high blood pressure",
        status: "Under Observation",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Problem/Diagnosis", accessor: "prob" },
      { Header: "Description", accessor: "desc" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  return (
    <div className="w-full bg-white rounded-2xl p-4 flex-1 flex flex-col gap-8 overflow-y-auto">
      <div className="text-24 text-test-color-072635 font-bold">
        Diagnosis List
      </div>
      <div className="w-full flex-1 overflow-auto scrollable-container">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
export default DiagnosisList;
