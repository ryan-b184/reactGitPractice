
import './app.css'
import './index.css'
import { Head } from "./Components/header/Head";
import {NavBar} from "./Components/navbar/NavBar";
import About from "./Components/about/About";
import {Experience} from "./Components/experience/Experience.jsx";
import Contact from "./Components/contact/Contact";
import { Portfolio } from './Components/portfolio/Portfolio.jsx';
import { APIPort } from './Components/portfolio/APIPort.jsx';
import {FooterComp} from './Components/footer/FooterComp.jsx'


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
        <Head></Head>
        <NavBar></NavBar>
        
        <APIPort/>
        <About></About>
        <Experience></Experience>
        <Portfolio/>
        <Contact></Contact>
        <FooterComp/>
        {/* <Comp></Comp> */}

      </div>
    </div>
  );
}

export default App;
