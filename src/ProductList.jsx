import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from './CartSlice';


function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page

    const [addedToCart, setAddedToCart] = useState({});
 
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    const cartCount = useSelector((state) =>
          state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    const handleAddToCart = (product) => {
      dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)

      setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
        ...prevState, // Spread the previous state to retain existing entries
        [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
      }));
    };    


   const plantsArray = [
      {
        category: "Moonpetal Sedatives",
        plants: [
          {
            name: "Lullaby Lotus",
            image: "Lotus.png",
            description: "Hushes mental chatter and summons velvet-quiet dreams.",
            cost: "$22",
          },
          {
            name: "Repose Reed",
            image: "Reed.png",
            description: "Wraps the mind in gentle stillness, goodbye 3 a.m. overthinking.",
            cost: "$14",
          },
          {
            name: "Moonmoss Pillow",
            image: "Moonmoss.png",
            description: "Cushions worries and cradles you in serene dreams.",
            cost: "$19",
          },
          {
            name: "Calm Camellia",
            image: "Camellia.png",
            description: "Melts tension; warm tea ambience for deep calm.",
            cost: "$16",
          },
          {
            name: "Drowsy Bluebell",
            image: "Bluebell.png",
            description: "Drifts you onto gentle waves of sleep and deepens REM. ",
            cost: "$12",
          },
        ],
      },
      {
        category: "Starburst Wilderness Vines",
        plants: [
          {
            name: "Star Spike",
            image: "StarSpike.png",
            description: "Opens lightning-fast routes across the cosmos.",
            cost: "$21",
          },
          {
            name: "Rift Runner Vine",
            image: "Vine.png",
            description: "Bursts into new biomes every night.",
            cost: "$18",
          },
          {
            name: "Portal Poppy",
            image: "Poppy.png",
            description: "Unlocks gateways between realities, one seed at a time.",
            cost: "$15",
          },
          {
            name: "Lava Agave",
            image: "Agawe.png",
            description: "Forges fiery trails across volcanic dreamscapes.",
            cost: "$24",
          },
          {
            name: "Wayfarer Bamboo",
            image: "Bamboo.png",
            description: "Unrolls roadways for endless roaming.",
            cost: "$17",
          },
        ],
      },
      {
        category: "Memory Blossom",
        plants: [
          {
            name: "Echo Orchid",
            image: "Orchid.png",
            description: "Calls familiar voices back into your dreaming rooms.",
            cost: "$20",
          },
          {
            name: "Keepsake Peony",
            image: "Peony.png",
            description: "Repaints treasured scenes with richer detail.",
            cost: "$13",
          },
          {
            name: "Hourglass Rose",
            image: "Rose.png",
            description: "Turns time gently, revisiting what once was.",
            cost: "$23",
          },
          {
            name: "Hearth Marigold",
            image: "Marigold.png",
            description: "Warms old family rooms and rekindles shared laughter.",
            cost: "$16",
          },
          {
            name: "Chrysanthemum Key",
            image: "Chrysanthemum.png",
            description: "Opens dream-paths to meet your lost loved ones.",
            cost: "$21",
          },
        ],
      },
      {
        category: "Muse Garden",
        plants: [
          {
            name: "Spark Snapdragon",
            image: "Snapdragon.png",
            description: "Scatters sparks that coalesce into ideas.",
            cost: "$25",
          },
          {
            name: "Inky Iris",
            image: "Iris.png",
            description: "Braids ideas, themes, and imagery into a clear draft.",
            cost: "$15",
          },
          {
            name: "Chorus Clover",
            image: "Clover.png",
            description: "Weaves stray notes and motifs into blooming melodies.",
            cost: "$12",
          },
          {
            name: "Coding Cactus",
            image: "Cactus.png",
            description: "Branches concepts, compiles sketches, and refactors chaos into patterns. ",
            cost: "$18",
          },
          {
            name: "Lucid Robusta",
            image: "Robusta.png",
            description: "Clarifies foggy thoughts and snaps them into focus. ",
            cost: "$24",
          },
        ],
      },
    ];




    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const imgSrcLogo = new URL(`./assets/0.png`, import.meta.url).href;
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src={imgSrcLogo} alt="logo" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Somniware Flora</h3>
                                <i style={{ color: 'white' }}>The Garden of Dreaming Paths</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>

                        <h1 className="cart" style={{ position: "relative" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            height="68"
                            width="68"
                            aria-hidden="true"
                          >
                            <rect width="156" height="156" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path
                              d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                              fill="none"
                              stroke="#faf9f9"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>

                          <span className="cart_quantity_count" aria-live="polite">
                            {cartCount}
                          </span>
                        </h1>



                    </a></div>


                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">

                    {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
                      <div key={index}> {/* Unique key for each category div */}
                        <h1>
                          <div>{category.category}</div> {/* Display the category name */}
                        </h1>
                        <div className="product-list"> {/* Container for the list of plant cards */}
                          {category.plants.map((plant, plantIndex) => { // Loop through each plant in the current category
                            const inCart = cartItems.some(i => i.name === plant.name);
                            // to support local images
                            const imgSrc = new URL(`./assets/${plant.image}`, import.meta.url).href;

                             return ( 
                            <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
                              <img 
                                className="product-image" 
                                src={imgSrc} // Display the plant image
                                alt={plant.name} // Alt text for accessibility
                              />
                              <div className="product-title">{plant.name}</div> {/* Display plant name */}
                              {/* Display other plant details like description and cost */}
                              <div className="product-description">{plant.description}</div> {/* Display plant description */}


                              <div className="product-cost">{plant.cost}</div> {/* Display plant cost */}

                              <button
                                className={`product-button ${inCart ? "added-to-cart" : ""}`}
                                disabled={inCart}
                                onClick={() => { if (!inCart) handleAddToCart(plant); }}
                              >
                                {inCart ? "Added to Cart" : "Add to Cart"}
                              </button>


                            </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
