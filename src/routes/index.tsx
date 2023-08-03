import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom"

import { Dashboard } from "../pages/Dashboard/Dashboard"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" element={<Dashboard />}></Route>

                <Route path="/*" element={<Navigate to={"/dashboard"} />}></Route>
            </Switch>
        </BrowserRouter>
    )
}