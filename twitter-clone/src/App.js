import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";
import Messages from "./components/messages/messages";
import Lists from "./components/lists/lists";
import Explore from "./components/explore/explore";
import Bookmarks from "./components/bookmarks/bookmarks";

import { BrowserRouter, Route } from "react-router-dom";
import Notification from "./components/notification/notification";
import Profile from "./components/profile/profile";
import More from "./components/More/More";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Route path="/feed" render={() => <Feed /> } />
          <Route path="/explore" render={() => <Explore /> } />
          <Route path="/messages" render={() => <Messages  dialog={props.dialog} message={props.message} /> } />
          <Route path="/bookmarks" render={() => <Bookmarks /> } />
          <Route path="/lists" render={() => <Lists /> } />
          <Route path="/notification" render={() => <Notification /> } />
          <Route path="/profile" render={() => <Profile /> } />
          <Route path="/more" render={() => <More /> } />
        </div>
        {/* <Feed /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
