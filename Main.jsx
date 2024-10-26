import './Main.css';
import img from'../img/pr.webp'
function Main(){
    return(
       <div>
      <section className="about-section" id='about'>
      <div className="about-image">
        <img src={img} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm [Your Name], a passionate web developer specializing in building modern and responsive websites. 
          With a strong background in React and front-end technologies, I strive to create user-friendly and efficient digital experiences.
        </p>
        <p>
          Throughout my career, I've had the privilege to work on various exciting projects, helping businesses grow and 
          providing seamless web experiences. Let's work together to bring your vision to life!
        </p>
        <button className="cta-button">Contact Me</button>
      </div>
    </section>
       </div>
    );
}
export default Main;