import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Route/Routes";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
