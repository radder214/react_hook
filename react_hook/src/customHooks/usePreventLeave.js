/**
 * custom Hooks : usePreventLeave
 * 해당 챕터에서는 useState, useEffect, useRef 등의 Hooks을 사용하지는 않았다.
 * 
 * [beforeunload 이벤트]
 * - 사용자가 웹 페이지를 떠나려고 할 때 발생하는 이벤트(창 닫기, 링크 이동, 새로고침 등)
 * - 해당 이벤트 발생 시 브라우저에 확인 메시지를 표시, 사용자의 의도를 다시 확인할 수 있다.
 * - 사용자가 페이지를 떠나기 전에 확인을 요청하거나 데이터를 저장하는 등의 작업을 수행할 수 있게 해준다.
 */
const usePreventLeave = () => {
    const listener = (event) => {
        console.log(`usePreventLeave 커스텀 훅 실행`);
        event.preventDefault();
        event.returnValue = "";
    }

    // beforeunload 이벤트 등록
    const enablePreventLeave = () => {
        window.addEventListener("beforeunload", listener);
    }
    // beforeunload 이벤트 해제
    const disablePreventLeave = () => {
        window.removeEventListener("beforeunload", listener);
    }

    return { enablePreventLeave, disablePreventLeave }
    // = return {enablePreventLeave : enablePreventLeave, disablePreventLeave : disablePreventLeave}
};

export default usePreventLeave;