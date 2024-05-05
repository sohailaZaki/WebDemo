import Navbar from "../Navbar"
import NavbarComponent from "../Common/navbar/navbar"
import Slider from "./Slider"
import Sitedescription from "./Sitedescription"
import ProductsList from "./ProductsList"
function Home(){
    return(
<>
<div>
<Slider/>
<Sitedescription/>
<ProductsList/>

</div>
</>
        )
    }
    export default Home; 