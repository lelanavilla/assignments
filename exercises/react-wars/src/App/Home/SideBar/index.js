import React from 'react';
import { Switch, Route } from "react-router-dom";

import PeopleList from './PeopleList';
import PersonDetails from "./PersonDetails";

function SideBar(props) {
    return (
        <div className="people-list-sidebar">
            <ul>
                <Switch>
                    <Route exact path="/"
                        component={PeopleList}></Route>
                    <Route path="/personDetails/:personId"
                        component={PersonDetails}></Route>
                </Switch>
            </ul>
        </div>
    )
}
export default SideBar;
