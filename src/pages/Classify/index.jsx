import React from "react";
import { useParams } from "react-router-dom";
import WebCard from "../../components/WebCard/index.jsx"

export default ()=>{
  return <WebCard title={useParams().id} />
}