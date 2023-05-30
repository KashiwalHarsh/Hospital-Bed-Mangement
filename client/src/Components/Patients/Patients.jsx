import React, { useEffect, useState } from "react";
import PatientNavbar from "../Patientnavbar/PatientNavbar";
import Detail from "../Detail/Detail";
import "./Patients.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Patients({ state, setState, pData }) {
  const [patientData, setPatientData] = useState([]);
  const [bedData, setbedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:4001/patientdata");
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    const getBedData = async () => {
      try {
        const response = await fetch("http://localhost:4001/getBed");
        const data = await response.json();
        setbedData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getBedData();
  }, []);
  return (
    <div className="patientcard">
      <PatientNavbar state={state} setState={setState} />
      <div className="ocuupyContainer">
        <div className="occupyChild">unoccupied bed:{bedData.freebeds}</div>
        <div className="occupyChild">total bed:{bedData.totalbeds}</div>
      </div>
      {isLoading ? (
        <>
          <div>Loading...</div>
        </>
      ) : (
        patientData.map((item, index) => {
          return (
            <div className="detailWrapper">
              <Detail pData={item} state={state} setState={setState} />
            </div>
          );
        })
      )}
    </div>
  );
}
