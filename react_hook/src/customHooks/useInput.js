import React, { useState } from "react";

/**
 * @param {*} initialValue 
 * @summary input 업데이트
 * @description 커스텀 hooks, React 공식 hooks이 아니다.
 */
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event; // 구조 분해 할당

        // 유효성 검사 후 state 변경
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
    // = return {value : value, onChange : onChange} [단축 속성명]
}

// export default가 아니기에 {중괄호}로 감싸야한다.
export { useInput };