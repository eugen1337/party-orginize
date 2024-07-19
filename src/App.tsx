import { RouterProvider } from "react-router-dom";
import { mainRouter } from "router/router";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
