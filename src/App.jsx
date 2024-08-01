import Profile from "./sections/Profile";
import Welcome from "./sections/Welcome";

function App() {
  return (
    <div className="flex flex-col container-snap">
      <Welcome />
      <Profile />
    </div>
  )
}

export default App