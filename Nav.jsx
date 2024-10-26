import './Nav.css';
import img from'../img/img.pr2.webp';
function Nav(){
    return(
        <div>
       <section className="home-section" id='home'>
      <div className="home-content">
        <h1>Welcome to Our Landing Page</h1>
        <p>Your gateway to explore the best services and products we offer.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="home-image">
        <img src={img} alt="Landing Page Visual" />
      </div>
    </section>
        </div>
    );
}
export default Nav;