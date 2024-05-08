
import Slider from "./Slider"
import Sitedescription from "./Sitedescription"

import ProductList from "./ProductsList"
import Categories from "./CategoriesSection"
import SummerCollection from "./SummerCollectionBlock"
function Home(){
    return(
<>
<div>
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
</div>
</>
        )
    }
    export default Home; 