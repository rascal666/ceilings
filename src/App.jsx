import './App.css'
import Toolbar from "./components/toolbar/toolbar.jsx";
import Header from "./components/header/header.jsx";
import Services from "./components/services/services.jsx";
import Calculator from "./components/calculator/calculator.jsx";
import Project from "./components/project/project.jsx";
import Comparison from "./components/comparison/comparison.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Reviews from "./components/reviews/reviews.jsx";
import Contacts from "./components/contacts/contacts.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {

  return (
    <div className="font-montserrat text-base text-[14px] lg:text-[18px] font-normal overflow-hidden">
        <div className='bg-[url(./assets/img/hearedBg.png)] bg-no-repeat bg-cover'>
            <Toolbar></Toolbar>
            <Header></Header>
        </div>
        <Services></Services>
        <Calculator></Calculator>
        <Project></Project>
        <Comparison></Comparison>
        <Portfolio></Portfolio>
        <Reviews></Reviews>
        <Contacts></Contacts>
        <Footer></Footer>


    </div>
  )
}

export default App
