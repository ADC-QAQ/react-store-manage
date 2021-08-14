import { lazy } from "react";

const RouteConfig = [
    {
        path: "/list",
        component: lazy(() => import('@views/list')),
        children: [
        ]
    },{
        path: "/home",
        component: lazy(() => import('@views/home')),
        children: [
        ]
    },{
        path: "/",
        redirect: "/home",
    },
];

export default RouteConfig;
