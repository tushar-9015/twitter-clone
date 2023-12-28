import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
