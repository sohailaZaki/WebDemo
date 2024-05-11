import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/CSS/category.css';
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Item from "../item/item";

const Category = (props) => {
    const { all_product } = useContext(ShopContext);
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
    const [sortOption, setSortOption] = useState(null);
    const [visibleProducts, setVisibleProducts] = useState(16); // عدد المنتجات المرئية

    const filterProductsByPriceRange = (minPrice, maxPrice) => {
        return all_product.filter(item => {
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
        filteredProducts = all_product;
    } else {
        const [minPrice, maxPrice] = selectedPriceRange.split(" - ").map(parseFloat);
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

    return (
        <div className="shp-category"> 
            {/* Banner */}
            <div className="container-fluid px-0 mb-5">
                <img src={props.banner} alt="" className="img-fluid" style={{ maxHeight: '15cm',  width: '100%', objectFit: 'cover' }} />
            </div>

            {/* Filter options */}
            <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                    <div className="col-auto">
                        <p className="mb-0">
                        <span>showing 1-{Math.min(filteredProducts.length, visibleProducts)} </span> out of {all_product.length} products
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

        </div>
    );
}

export default Category;
