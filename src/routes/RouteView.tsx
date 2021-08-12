import { Redirect, Route, Switch } from "react-router-dom";

export interface IRouteViewProps {
  path?: string;
  redirect?: string;
  component?: any;
  children?: any;
}

const RouteView = (props: IRouteViewProps) => {
  return (
    <Switch>
      {props.children &&
        props.children.map((item: IRouteViewProps, index: number) => {
          if (item.redirect) {
            return (
              <Redirect
                key={index}
                from={item.path}
                to={item.redirect}
              ></Redirect>
            );
          }
          return (
            <Route
              key={index}
              path={item.path}
              render={(props) => {
                return (
                  item.component && (
                    <item.component
                      children={item.children}
                      {...props}
                    ></item.component>
                  )
                );
              }}
            ></Route>
          );
        })}
    </Switch>
  );
};

export default RouteView;