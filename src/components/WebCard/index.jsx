import React from 'react';
import { getData } from "../../data/index.jsx";
import "./index.css";

export default function WebCard({
  title,
}) {
  const getCardContent = (data) => {
    return data.map(item => <div className="row-u-lg-1-4 row-u-1-2 row-u-sm-23-24" key={item.name+title}>
      <a href={item.url} target="_blank" style={{textDecoration:"none"}}>
        <div className="card-default hint--bottom hint--bounce hint--medium" aria-label={item.desc}>
        
        <img className="card-img" src={item.icon} />
        <div className="card-main">
          <div className="card-name">{item.name}</div>
          <div style={{ width: '100%' }}>
            <div className="card-des">{item.desc}</div>
          </div></div>
          
      </div></a>
    </div>)
  }

  const getPageContent = ()=>{
    const data = getData(title)
    return data.map((item,index) => <div key={index+item.title} className='block'>
      <div style={{ width: "100%", color: "#777" }} data-title={item.title + title}><h3>{item.title}</h3></div>
      <div style={{ width: "100%" }}>
          <div className="row-g">
          {getCardContent(item.item)}
          </div>
        </div>
    </div>
    )
  }
  return getPageContent()
        
}