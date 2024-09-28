import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "router/router";
import { store } from "store/store";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
