import "./App.css";
import Widgets from "./components/widgets/Widgets";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Messages from "./components/messages/messages";
import Lists from "./components/lists/Lists";
import Explore from "./components/explore/Explore";
import Bookmarks from "./components/bookmarks/Bookmarks";

import { BrowserRouter, Route } from "react-router-dom";
import Notification from "./components/notification/Notification";
import Profile from "./components/profile/Profile";

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
         
        </div>
        {/* <Feed /> */}

        <Widgets />
      </div>
    </BrowserRouter>
  );
}

export default App;
