import React, { FC, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const Demo = lazy(() => import('@views/demo'));

const loading = () => <div className="loader" />;

const App: FC = () => {
   return <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" component={Demo} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>;
};

export default App;