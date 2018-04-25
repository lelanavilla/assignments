import React from 'react';
import { Switch, Route } from "react-router-dom";
import BountyList from "./BountyList.js";
import BountyDetails from "./BountyDetails.js";
function Home(props) {
    return (
        <div className="content-area">
            <ul>
                <Switch>
                    <Route exact path="/" component={BountyList}></Route>
                    <Route path="/bountyDetails/bountyDetails/:bountyId" component={BountyDetails}></Route>
                </Switch>
            </ul>
        </div>
    )
}

export default Home;