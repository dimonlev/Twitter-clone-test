import "./App.css";
import Widgets from "./components/widgets/Widgets";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Messages from "./components/messages/messages";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Route path="/feed" component={Feed} />
          <Route path="/messages" component={Messages} />
          <Route path="/lists" component={Lists} />
        </div>
        {/* <Feed /> */}

        <Widgets />
      </div>
    </BrowserRouter>
  );
}

export default App;
