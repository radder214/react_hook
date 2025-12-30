import React, { useEffect, useState } from "react";

// /**
//  * custom Hooks : useBeforeLeave
//  * 
//  * [mouseleave]
//  * - 마우스 포인터가 특정 요소의 영역을 벗어날 때 발생하는 이벤트
//  * - 사용자가 해당 요소와 상호작용을 멈추고 다른 곳으로 마우스를 이동했을 때 트리거된다.
//  */
const useBeforeLeave = (onBefore) => {
    useEffect(() => {
        if (typeof onBefore !== 'function') return;

        // componentDidMount
        document.addEventListener("mouseleave", onBefore);

        // componentWillUnMount
        return () => {
            document.removeEventListener("mouseleave", onBefore);
        }
    }, []); // 딱 한 번만 addEventListener 작동 by []
};

export default useBeforeLeave;