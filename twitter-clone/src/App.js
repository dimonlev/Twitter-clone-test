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
import { More } from "@material-ui/icons";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Route path="/feed" component={Feed} />
          <Route path="/explore" component={Explore} />
          <Route path="/messages" component={Messages} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/lists" component={Lists} />
          <Route path="/notification" component={Notification} />
          <Route path="/profile" component={Profile} />
          <Route path="/more" component={More} />
         
        </div>
        {/* <Feed /> */}

      
      </div>
    </BrowserRouter>
  );
}

export default App;
