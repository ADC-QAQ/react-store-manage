import { lazy } from "react";

const Demo = lazy(() => import('@views/demo'));

const RouteConfig = [
    {
        path: "/demo",
        component: Demo,
        children: [
        ]
    }, {
        path: "/",
        redirect: "/demo",
    },
];

export default RouteConfig;
