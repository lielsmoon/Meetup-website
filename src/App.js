import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={AllMeetups} />
                <Route path="/favorites" component={FavoritesPage} />
                <Route path="/new-meetup" component={NewMeetupPage} />
            </Switch>
        </Layout>
    );
}

export default App;
