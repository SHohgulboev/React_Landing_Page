import './Section.css';
import img from '../img/img1.webp';
import img1 from '../img/img2.webp';
import img2 from '../img/img3.webp';
function Section(){
    return(
        <div>
              <section className="products-section"id='products'>
      <h2>Our Products</h2>
      <div className="products-grid">
        <div className="product-item">
          <img src={img} alt="Product 1" />
          <h3>Product One</h3>
          <p>This is a great product that offers amazing features.</p>
          <button className="cta-button">Learn More</button>
        </div>

        <div className="product-item">
          <img src={img1} alt="Product 2" />
          <h3>Product Two</h3>
          <p>Our second product is perfect for your business needs.</p>
          <button className="cta-button">Learn More</button>
        </div>

        <div className="product-item">
          <img src={img2} alt="Product 3" />
          <h3>Product Three</h3>
          <p>Check out this fantastic product with premium features.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
        </div>
    );
}
export default Section;