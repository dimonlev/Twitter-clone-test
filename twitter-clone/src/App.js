import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Messages from "./components/Messages/Messages";
import Lists from "./components/Lists/Lists";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { BrowserRouter, Route } from "react-router-dom";
import Notification from "./components/Notification/Notification";
import Profile from "./components/Profile/Profile";
import More from "./components/More/More";


function App(props) {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="app-content">
          <Route path="/home" render={() => <Home
            newChangePost={props.newChangePost}
            homePage={props.state.homePage}
            addPost={props.addPost} />} />
          <Route path="/explore" render={() => <Explore />} />
          <Route path="/messages" render={() => <Messages
            messagePage={props.state.messagePage}
            addMessage={props.addMessage} />} />
          <Route path="/bookmarks" render={() => <Bookmarks />} />
          <Route path="/lists" render={() => <Lists />} />
          <Route path="/notification" render={() => <Notification />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/more" render={() => <More />} />
        </div>
        {/* <Feed /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
