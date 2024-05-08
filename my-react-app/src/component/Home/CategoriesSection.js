import Cat1 from '../../images/cat-large-item1.jpg'
import Cat2 from '../../images/cat-large-item2.jpg'
import Cat3 from '../../images/cat-large-item3.jpg'
import "./Categories.css"
function Categories(){
    return(
<>
<section class="categories full-width-container overflow-hidden "style={{margin : '200px 0px' }}>
    <div class="row d-flex flex-wrap g-0">
      <div class="col-md-6 col-sm-6">
        <div class="cat-item position-relative">
          <div class="image-holder">
            <a href="shop.html"><img src={Cat1} alt="categories" class="product-image img-fluid"/></a>
            <div class="category-content position-absolute p-md-5 ps-5 p-3 text-uppercase  ">
              <h2 class="section-title text-white display-3">Skin Care</h2>
              <div class="btn-left btn-swiper">
                <a href="shop.html" class="Shopbtn ">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="">
          <div class="cat-item position-relative">
            <div class="image-holder">
              <a href="shop.html"><img src={Cat2} alt="categories" class="product-image img-fluid"/></a>
              <div class="category-content position-absolute p-md-5 ps-5 p-3 text-uppercase">
                <h4 class="section-title text-white display-6">Make-Up Products</h4>
                <div class="btn-left btn-swiper mt-3">
                  <a href="shop.html" class="Shopbtn ">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="cat-item position-relative">
            <div class="image-holder">
              <a href="shop.html"><img src={Cat3} alt="categories" class="product-image img-fluid"/></a>
              <div class="category-content position-absolute p-md-5 ps-5 p-3 text-uppercase">
                <h4 class="section-title text-white display-6">Beauty Products</h4>
                <div class="btn-left btn-swiper mt-3">
                  <a href="shop.html" class="Shopbtn ">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</>
    )
}export default Categories