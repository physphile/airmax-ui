import { Plug } from "./components/Plug/Plug";
import { Loader } from "./components/Loader/Loader";
import { Icon } from "./components/Icon/Icon";

function App() {
  return (
    <>
      <Loader />
      <Plug type="400" />
      <Icon name="arrow_left" />
    </>
  );
}

export default App;
