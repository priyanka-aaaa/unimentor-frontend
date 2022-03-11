import React from 'react';
import { Route, Switch } from "react-router-dom";
import routes from "./admin/AdminRoutes.js";
import Sidebar from "./admin/Sidebar";
import Topbar from "./admin/Topbar";

function UniversityLayout(props) {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key} />
                );
            } else {
                return null;
            }
        });
    };
    return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <Switch>{getRoutes(routes)}</Switch>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default UniversityLayout;