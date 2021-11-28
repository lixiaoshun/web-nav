
import React, { useEffect, useRef, useCallback, useState } from "react";
import useAddEventListener from "../../../../components/MyHooks/useAddEventListener.js";
import "./index.css";

export default function ({
  data,
  visible,
  onClick,
  close
}) {
  const [refSearchType, vis] = useAddEventListener(visible,{ isCapture:true})
  useEffect(() => {
    if(!vis){
      close()
    }
  }, [vis])

  return <div
    ref={refSearchType}
    className="searchTypeM"
    style={{ display: visible ? "" : "none" }}>
    {
      Object.keys(data).map(item => <div
        key={item}
        className="m-content"
        onClick={() => onClick(item)} >
        <img style={{ margin: '8px' }} src={data[item].icon} />
        <span>{data[item].name}</span>
      </div>)
    }
  </div>
}
