
import Slider from "./Slider"
import Sitedescription from "./Sitedescription"
import ProductList from "./ProductsList"
import Categories from "./CategoriesSection"
import SummerCollection from "./SummerCollectionBlock"
import NavbarComponent from "../navbar/navbar"
import Footer from "../footer/footer"
function Home(){
    return(
<>
<div>
<NavbarComponent/>
<Slider/>
<Sitedescription/>
<ProductList
productType="New Arrivals"
apiUrl="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
Status="New"
/>

<ProductList
productType="Best Sellers"
apiUrl="https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow"
Status="Hot"
/>
<Categories/>
<ProductList
productType="Related Products"
apiUrl="https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara"
Status="Realted"
/>
<SummerCollection/>
<Footer/>
</div>
</>
        )
    }
    export default Home; 