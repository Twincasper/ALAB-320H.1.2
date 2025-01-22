import './App.css'
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Article} from "./components/Article.jsx";

function App() {

  return (
    <>
        <Header />
        <Article date={"11/12/20"} title={"On the Street in Brooklyn"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} image={"https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"} />

        <Article date={"11/11/20"} title={"Vintage in Vogue"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} image={"https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"} />
        <Footer />
    </>
  )
}

export default App
