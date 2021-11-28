
import React, { useEffect, useRef, useCallback, useState } from "react";

export default function useAddEventListener(initState , { action='click', isCapture=false} = options) {
  const ref = useRef(null);
  const [vis, setVis] = useState(initState || false);
  useEffect(() => {
    setVis(initState)
    if (initState) {
      document.addEventListener(action, judgeState, { capture: isCapture } )
    }
    return () => document.removeEventListener(action, judgeState, { capture: isCapture}) //销毁阶段
  }, [initState])

  const judgeState = useCallback((e) => {
    let tag = ref.current.contains(e.target)
    if (!tag) {
      document.removeEventListener(action, judgeState, { capture: isCapture })
      setVis(false)
    }
  }, [])
  return [ref, vis]

}