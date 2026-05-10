import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./App.store";
import Router from './App.routes.jsx'

const App = () => {
  return (<div className="h-screen w-full bg-[#171615] text-white">
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </div>);
};

export default App;
