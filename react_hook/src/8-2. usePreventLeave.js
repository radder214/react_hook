import usePreventLeave from "./customHooks/usePreventLeave.js";

const App = () => {
    const { enablePreventLeave, disablePreventLeave } = usePreventLeave();
    return (
        <div>
            {/* beforeunload 이벤트 등록 */}
            <button onClick={enablePreventLeave}>Protect</button>
            {/* beforeunload 이벤트 해제 */}
            <button onClick={disablePreventLeave}>UnProtect</button>
        </div>
    );
};

export default App;