import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "router/router";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          components: {
            Button: {
              colorPrimary: "#1b3152",
              colorPrimaryHover: "#284674",
            },
            Input: {
              activeBorderColor: "#5686c4",
              hoverBorderColor: "#436796",
            },
          },
        }}
      >
        <RouterProvider router={mainRouter} />
      </ConfigProvider>
    </>
  );
}

export default App;
