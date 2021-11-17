
import React from "react";
import "./index.css";
export default function ({
  data,
  visible,
  onClick,
}) {
  return <div className="searchTypeM" style={{display:visible?"":"none"}}>
    {Object.keys(data).map(item => <div key={item} className="m-content" onClick={() => onClick(item)}>
      <img style={{ margin: '8px'}} src={data[item].icon}/>
      <span>{data[item].name}</span>
    </div>)}
  </div>
}