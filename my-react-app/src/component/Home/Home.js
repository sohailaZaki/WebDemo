
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

<Slider/>
<Sitedescription/>
<ProductList
productType="New Arrivals"
Status="New"
sliceStart={0}
sliceEnd={6}
/>

<ProductList
productType="Best Sellers"
Status="Hot"
sliceStart={7}
sliceEnd={12}
/>
<Categories/>
<ProductList
productType="Related Products"
sliceStart={13}
sliceEnd={19}
Status="Realted"
/>
<SummerCollection/>
<Footer/>
</div>
</>
        )
    }
    export default Home; 