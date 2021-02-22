import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";



import Register from "./components/Register/Register"
import Board from "./components/Board/Board"
import UserHome from "./components/User/Home/Home"
import Header from "./components/Header/Header"







const Routes = () => {

    return (
        <Router>
            <Header />

            <Switch>
                <Route path="/login"> <Board /> </Route>
                <Route path="/register"> <Register /> </Route>
                <Route path="/home"> <UserHome /> </Route>

                <Route path="/board/:id" exact> <Board /> </Route>
                <Route path="/"> <Board /> </Route>
            </Switch>

        </Router>

    )


}


export default Routes;


