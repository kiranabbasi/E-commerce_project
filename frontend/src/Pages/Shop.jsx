import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Assests } from '../Assests/Assests';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
  const { Products, Search, ShowSearch } = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Color, setColor] = useState([]);
  const [PriceRange, setPriceRange] = useState(null);
  const [SortBy, setSortBy] = useState('Relevant'); 

  // Toggle category filter
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle color filter
  const toggleColor = (e) => {
    if (Color.includes(e.target.value)) {
      setColor((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setColor((prev) => [...prev, e.target.value]);
    }
  };

  // Handle price range filter
  const togglePriceRange = (e, min, max) => {
    setPriceRange({ min, max });
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Apply filters for category, color, price range, and sorting
  const ApplyFilter = () => {
    let ProductsCopy = Products.slice();

    if(ShowSearch && Search){
      ProductsCopy =ProductsCopy.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()))
    }

    // Filter by category
    if (Category.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) => Category.includes(item.Category));
    }

    // Filter by color
    if (Color.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) => Color.includes(item.Color));
    }

    // Filter by price range
    if (PriceRange) {
      ProductsCopy = ProductsCopy.filter(
        (item) => item.prize >= PriceRange.min && item.prize <= PriceRange.max
      );
    }

    // Sort products based on SortBy state
    if (SortBy === 'low-high') {
      ProductsCopy = ProductsCopy.sort((a, b) => a.prize - b.prize);
    } else if (SortBy === 'high-low') {
      ProductsCopy = ProductsCopy.sort((a, b) => b.prize - a.prize);
    }

    // Relevance sorting can be based on the original order (assumed to be relevance order)
    setFilterProducts(ProductsCopy);
  };

  useEffect(() => {
    setFilterProducts(Products);
  }, [Products]);

  useEffect(() => {
    ApplyFilter();
  }, [Category, Color, PriceRange, SortBy, Search, ShowSearch]);

  return (
    <div className="lg:w-10/12 w-11/12 m-auto pt-10 mb-10 border-t">
      <div className="flex justify-between mb-3 items-center">
        <p className="text-xs font-medium">Showing {FilterProducts.length} items</p>
        <div>
          <select
            className="border-none text-sm text-stone-600 px-2 w-40"
            value={SortBy}
            onChange={handleSortChange} 
          >
            <option value="Relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-10 gap-1">
        {/* filter options */}
        <div className="min-w-52">
          <div
            onClick={() => setShowFilter(!ShowFilter)}
            className="flex gap-2 my-2 sm:hidden cursor-pointer"
          >
            <img src={Assests.Filters} alt="" />
            <p className="text-xs font-medium">FILTER</p>
          </div>

          {/* Category Filter */}
          <div
            className={`border-y-2 border-gray-300 pl-5 py-3 mt-3 ${ShowFilter ? '' : 'hidden'} sm:block`}
          >
            <p className="mb-3 font-medium text-xs">Category</p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {['DinnerWare', 'Ceramic', 'Traditional', 'DecorArt', 'GiftSets'].map((category) => (
                <p className="flex gap-2" key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    onChange={toggleCategory}
                  />
                  {category}
                </p>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div
            className={`border-b-2 border-gray-300 pl-5 py-3 mt-1 ${ShowFilter ? '' : 'hidden'} sm:block`}
          >
            <p className="mb-3 font-medium text-xs">Price Range</p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <p className="flex gap-2">
                <input type="radio" name="price" onChange={(e) => togglePriceRange(e, 0, 10)} />$0 - $10
              </p>
              <p className="flex gap-2">
                <input type="radio" name="price" onChange={(e) => togglePriceRange(e, 10, 50)} />$10 - $50
              </p>
              <p className="flex gap-2">
                <input type="radio" name="price" onChange={(e) => togglePriceRange(e, 50, 100)} />$50 - $100
              </p>
              <p className="flex gap-2">
                <input type="radio" name="price" onChange={(e) => togglePriceRange(e, 100, 200)} />$100 - $200
              </p>
              <p className="flex gap-2">
                <input type="radio" name="price" onChange={(e) => togglePriceRange(e, 200, Infinity)} />
                &gt; $200
              </p>
            </div>
          </div>

          {/* Color Filter */}
          <div
            className={`border-b-2 border-gray-300 pl-5 py-3 mt-1 ${ShowFilter ? '' : 'hidden'} sm:block`}
          >
            <p className="mb-3 font-medium text-xs">Color</p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {['White', 'Green', 'Blue', 'Rose', 'Grey', 'Brown'].map((color) => (
                <p className="flex gap-2" key={color}>
                  <input
                    type="checkbox"
                    value={color}
                    onChange={toggleColor}
                  />
                  {color}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Product Display */}
        <div className="flex-1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-14 gap-5 gap-y-10">
            {FilterProducts.map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                prize={item.prize}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
