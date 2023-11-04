import { NavBar } from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {

  let Comp

  {/* creating a switch to display differnet pages based on
        what nav bar option was chosen */}
  switch (window.location.pathname) {
    case "/":
      Comp = Home
      break
    case "/about":
      Comp = About
      break
  }


  return (
    <div className="bg-primary-subtle">
      <div className="w-75 m-auto bg-body">

        
        <NavBar></NavBar>
        <Comp></Comp>

      </div>
    </div>
  );
}

export default App;
