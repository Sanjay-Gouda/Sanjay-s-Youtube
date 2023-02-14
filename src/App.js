import { Children } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Body } from "./components/Body/Body";
import Header from "./components/Header/Header";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import WatchVideoContainer from "./components/WatchVideo/WatchVideoContainer";
import { store } from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,

    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchVideoContainer />,
      },
    ],
  },

  // External Paths
  // {
  //   path: "/home",
  //   element: <Header />,
  // },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
