
import './app.css'
import './index.css'
import { Head } from "./Components/header/Head";
import {NavBar} from "./Components/navbar/NavBar";
import About from "./Components/about/About";
import {Experience} from "./Components/experience/Experience.jsx";
import Contact from "./Components/contact/Contact";



function App() {

  let Comp

  {/* creating a switch to display differnet pages based on
        what nav bar option was chosen */}
  // switch (window.location.pathname) {
  //   case "/reactGitPractice/":
  //     Comp = Home
  //     break
  //   case "/reactGitPractice/about":
  //     Comp = About
  //     break
  // }
        //no longer using this as all information will be on the same page for now

  return (
    <div>
      <div className="">

        {/* import all components that will show up on the page */}
        <NavBar></NavBar>
        <Head></Head>
        <About></About>
        <Experience></Experience>
        <Contact></Contact>
        {/* <Comp></Comp> */}

      </div>
    </div>
  );
}

export default App;
