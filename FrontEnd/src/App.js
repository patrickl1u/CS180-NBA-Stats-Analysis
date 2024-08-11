import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Route, Switch} from "react-router-dom";

import "./App.css";

import AddTeam from "./components/add-team.component";
import Team from "./components/team.component";
import TeamsList from "./components/teams-list.component";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/teams" className="navbar-brand">
                        NBA Analysis
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/teams"} className="nav-link">
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/teams"]} component={TeamsList}/>
                        <Route exact path="/add" component={Team}/>
                        <Route path="/teams/:id" component={AddTeam}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
