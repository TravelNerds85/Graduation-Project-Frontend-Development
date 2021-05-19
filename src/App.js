import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import New from "./pages/New/New";
import Deleted from "./pages/Deleted/Deleted";
import Profile from "./pages/Profile/Profile";
import './App.modules.css';

function App() {

    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/deleted" exact component={Deleted} />
                <Route path="/location" exact component={Location} />
                <Route path="/new" exact component={New} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </>
    );
}
export default App;