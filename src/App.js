import { Provider, useSelector } from "react-redux";
import Toictoctoe from "./components/Tictoctoe";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={theme === "light" ? "myPage light" : "myPage dark"}>
      <Toictoctoe />
    </div>
  );
}

export default App;
