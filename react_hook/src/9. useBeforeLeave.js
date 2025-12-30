import useBeforeLeave from "./customHooks/useBeforeLeave.js";

const App = () => {
  const begForLife = () => console.log("Leaved...");
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>H1 Title</h1>
    </div>
  );
};

export default App;