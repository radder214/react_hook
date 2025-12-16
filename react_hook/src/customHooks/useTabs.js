import React, { useState } from "react";

const useTabs = (initialTab, allTabs) => {
    // Hook은 항상 최상단에서 호출해야 함(React 규칙임)
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    // 이게 useState 보다 위에 있으면 Error 발생
    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem : allTabs[currentIndex],
        setCurrentIndex : setCurrentIndex
    }
}

export default useTabs;