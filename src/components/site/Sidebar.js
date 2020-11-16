import React from "react"
import {
    Route,
    Link,
    Switch
} from "react-router-dom"
import Home from "./Home"
import Resources from "./Resources"
import FunctionalComponentDemo from "../concetps/FunctionalComponentDemo"
import JSXRules from "../concetps/JSXRules";
import State from "../concetps/States";
import Effects from "../concetps/Effects";
import PropsDemo from "../concetps/PropsDemo";
import Hooks from "../concetps/Hooks";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/jsxrules">JSX Rules</Link></li>
                    <li><Link to="/state">useState</Link></li>
                    <li><Link to="/effects">useEffect</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/propsdemo">Porps Demo</Link></li>
                    <li><Link to="/hooks">Hooks</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/jsxrules"><JSXRules /></Route>
                    <Route exact path="/state"><State /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/effects"><Effects /></Route>
                    <Route exact path="/propsdemo"><PropsDemo/></Route>
                    <Route exact path="/hooks"><Hooks /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;