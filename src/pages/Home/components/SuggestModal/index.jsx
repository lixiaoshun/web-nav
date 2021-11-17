import React,{useState} from "react";
import "./index.css";

export default function ({
  data
}) {
  return <div className="search-result">
    <ul>
      {data.map(item => <li>
        <div className="s-result-logo"></div>
        <div className="s-result-title">{item.Txt}</div>
        {/* <div className="s-result-url">http:www.baidu.com</div> */}
      </li>)}
      
    </ul>
  </div>
}