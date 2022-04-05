

import { Provider } from "react-redux";
import Toictoctoe from "./components/Tictoctoe";
import store from "./redux/store";

 function App() {

  return (
    <Provider store={store}>
      <Toictoctoe/>
    </Provider>
  );
}

export default App;





