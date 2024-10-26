import './Header.css';
import { FaReact } from "react-icons/fa";
function Header(){
    return(
        <div>
            <header class="header">
    <div class="logo">
      <FaReact className='icons'/>
      <h1>React Landing Page</h1>
    </div>
    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
      <a href="#map">Map</a>
    </nav>
  </header><br></br><br></br><br></br>
        </div>
    );
}

export default Header;