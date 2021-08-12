import React, { FC } from 'react';
import RouteConfig from "@routes/router.config";
import RouteView from "@routes/RouteView";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

const loading = () => <div className="loader" />;

const App: FC = () => {
   return <BrowserRouter>
      <React.Suspense fallback={loading()}>
         <RouteView children={RouteConfig}></RouteView>
      </React.Suspense>
    </BrowserRouter>;
};

export default App;