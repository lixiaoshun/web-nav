
import React, { useEffect, useRef,useCallback } from "react";
import "./index.css";
export default function ({
  data,
  visible,
  onClick,
  close
}) {
  const refSearchType = useRef(null);

  useEffect(()=>{
    if (visible) {
      document.addEventListener('click', judgeState)
    } else {
      document.removeEventListener('click', judgeState)
    }
  },[visible])

  const judgeState = useCallback((e) => {
    let tag = refSearchType.current.contains(e.target)
    if (!tag) {
      close()
    }
  },[])

  return <div ref={refSearchType} className="searchTypeM" style={{display:visible?"":"none"}}>
    {Object.keys(data).map(item => <div key={item} className="m-content" onClick={() => onClick(item)} >
      <img style={{ margin: '8px'}} src={data[item].icon}/>
      <span>{data[item].name}</span>
    </div>)}
  </div>
}