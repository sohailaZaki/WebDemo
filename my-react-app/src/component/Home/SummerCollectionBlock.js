import { Link } from "react-router-dom"
import collection from "../../images/collection-banner.jpg"
function SummerCollection (){
    return (

        <>
        <section class="collection container py-5" style={{margin:" 200px 100px"}}>
    <div class="collection-item  row g-4 d-flex justify-content-between align-items-center flex-direction-row flex-wrap my-5">
      <div class="col-md-5 column-container">
        <div class="cat-item position-relative">
          <div class="image-holder">
            <a href="shop.html"><img src={collection} alt="categories" class="product-image img-fluid"/></a>
            <div class="collection-content position-absolute p-5 text-uppercase  ">
              <h2 class="section-title text-white display-3 "> <strike>25%</strike> Now 50% OFF</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 column-container collection-bg">
        <div class="collection-content mx-md-5 my-5">
          <h2 class="element-title text-uppercase display-4 ">Summer collection</h2>
          <p data-sider-select-id="a00514bd-bb23-4797-8c41-89fc32c96664">Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
            fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc,
            lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed
            facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
          <Link to="/shop" class="btn btn-dark  text-uppercase mt-3">Shop Collection</Link>

        </div>
      </div>
    </div>
    
  </section>
        </>
    )
}export default SummerCollection