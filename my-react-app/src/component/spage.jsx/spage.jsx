import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/CSS/category.css';
import './search.css'
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Item from "../item/item";
import NavbarComponent from "../../component/navbar/navbar";
import Footer from "../footer/footer";

const Spage = (props) => {
    const { all_product } = useContext(ShopContext);
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
    const [sortOption, setSortOption] = useState(null);
    const [visibleProducts, setVisibleProducts] = useState(16); // عدد المنتجات المرئية
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    const [showSearchResults, setShowSearchResults] = useState(true); // State to control the visibility of search results

    const handlefilter = (value) => {
        const res = all_product.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(res); // Update search results
        setShowSearchResults(true); // Show search results
    };
    const selectProductFromResults = (productName) => {
        document.getElementById("searchInput").value = productName;
    };

    const filterProductsByPriceRange = (minPrice, maxPrice) => {
        return searchResults.filter(item => {
            const price = parseFloat(item.price);
            return price >= minPrice && price <= maxPrice;
        });
    };

    const handlePriceRangeSelect = (minPrice, maxPrice) => {
        setSelectedPriceRange(`${minPrice} - ${maxPrice}`);
    };

    const resetFilters = () => {
        setSelectedPriceRange("All");
    };

    const sortProducts = (option) => {
        setSortOption(option);
    };

    const priceRanges = [
        { label: "Less than $10", minPrice: 0, maxPrice: 10 },
        { label: "$10 - $50", minPrice: 10, maxPrice: 50 },
        { label: "$50 - $100", minPrice: 50, maxPrice: 100 },
        { label: "$100 - $200", minPrice: 100, maxPrice: 200 },
        { label: "$200 - $500", minPrice: 200, maxPrice: 500 }
    ];

    let filteredProducts;
    if (selectedPriceRange === "All") {
        filteredProducts = searchResults.length > 0 ? searchResults : all_product;
    } else {
        const [minPrice, maxPrice] = selectedPriceRange.split(" - ").map(parseFloat);
        filteredProducts = searchResults.length > 0 ? searchResults : all_product;
        filteredProducts = filterProductsByPriceRange(minPrice, maxPrice);
    }

    if (sortOption === 'lowToHigh') {
        filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'highToLow') {
        filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    const loadMore = () => {
        setVisibleProducts(prev => prev + 16); 
    };

    const closeSearchResults = () => {
        setShowSearchResults(false); // Hide search results
    };

    return (
        
        <div className="shp-category"> 
        <NavbarComponent /> 
            {/* Banner */}
            <div className="container-fluid px-0 mb-5">
                <img src={props.banner} alt="" className="img-fluid" style={{ maxHeight: '15cm',  width: '100%', objectFit: 'cover' }} />
            </div>
            <div className="searchtop" style={{ paddingTop: "2px", paddingBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div className="search" style={{ width: "60%", marginBottom: "10px" }}> {/* Increase width for larger size */}
        <form id="form" className="d-flex flex-wrap gap-2">
            <input
                id="searchInput"
                onChange={e => handlefilter(e.target.value)}
                type="text"
                name="email"
                placeholder="search here..."
                className="form-control form-control-lg rounded-pill fs-6 py-3 px-4" // Increase padding for a larger input
            />
        </form>
    </div>
    {showSearchResults && (
        <div className="results" style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}> {/* Adjust width as needed */}
            {searchResults.length > 0 ? 
                searchResults.map((d, i) => (
                    <div
                        className="form-control form-control-lg rounded-pill fs-6 py-3 px-4 mb-1" // Adjust padding for larger result items
                        key={i}
                        onClick={() => {
                            selectProductFromResults(d.name);
                            closeSearchResults();
                        }}
                    >
                        {d.name}
                    </div>
                )) :
                <div className="form-control form-control-lg rounded-pill fs-6 py-3 px-4">No results found</div>
            }
        </div>
    )}
</div>

            {/* Filter options */}
            <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                    <div className="col-auto">
                        <p className="mb-0">
                            <span>showing 1-{Math.ceil(filteredProducts.length/16)} </span> out of {filteredProducts.length} products
                        </p>
                    </div>
                    <div className="col-auto">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{ border: 'none', background: 'none' , textAlign: 'center'}}>Sort by</span>
                            </div>
                            <select className="custom-select border rounded-pill " id="sortSelect" onChange={(e) => sortProducts(e.target.value)}>
                                <option defaultValue>All</option>
                                <option value="lowToHigh">Price low to high</option>
                                <option value="highToLow">Price high to low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Filter options and Product list */}
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="text-grey">FILTER BY:</h4>
                        <div>
                            <h5>Price</h5>
                            {priceRanges.map((range, index) => (
                                <div key={index} className="border p-2 mb-2" style={{ cursor: 'pointer' }}>
                                    <a className={`form-check-label ${selectedPriceRange === range.label ? 'active' : ''}`} href="#" style={{ display: 'flex', alignItems: 'center' }} onClick={() => handlePriceRangeSelect(range.minPrice, range.maxPrice)}>
                                        {range.label}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="btn-btn-link-container" style={{ cursor: 'pointer' }}>
                            <a className="btn-btn-link" onClick={resetFilters}>RESET ALL FILTERS</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                         {/* Product list */}
                         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                            {filteredProducts.slice(0, visibleProducts).map((item, i) => (
                                <div key={i} className="col mb-4">
                                    <Item id={item.id} name={item.name} image={item.image} price={item.price} />
                                </div>
                            ))}   
                        </div>
                            {visibleProducts < filteredProducts.length && (
                                <div className="more" onClick={loadMore}>
                                    Explore more
                                </div>
                            )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Spage;
