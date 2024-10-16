import {React, useState} from 'react'
import "./Navbar.css"
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'


function Navbar() {
    let [cat,setCat] = useState("hide")
    function toggle(){
        if(cat === "hide"){
            setCat("show")
        }else{
            setCat("hide")
        }
    }
  return (
    <div className='container etsy_navbar pt-md-3 pt-0 px-0 px-3 px-md-0'>
       <div className="top_nav_bar d-flex gap-2 align-items-center justify-content-md-center justify-content-between">
       <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="categories d-md-flex d-none gap-2 align-items-center" onClick={toggle}>
        <i class="fa-solid fa-bars"></i>
        <span className='nav_categories'>Categories</span>
        <div className="categories_tab" style={ cat==="show"? {display:"block"} : {display:"none"}}>
            <div className="categories_option py-2 d-flex flex-column text-start">
                <a href="" className='nav-link cat_options'>Accessories</a>
                <a href="" className='nav-link cat_options'>Art & Collectibles</a>
                <a href="" className='nav-link cat_options'>Baby</a>
                <a href="" className='nav-link cat_options'>Bags & Purses</a>
                <a href="" className='nav-link cat_options'>Bath & Beauty</a>
                <a href="" className='nav-link cat_options'>Books, Films & Music</a>
                <a href="" className='nav-link cat_options'>Clothing</a>
                <a href="" className='nav-link cat_options'>Craft Supplies & Tools</a>
                <a href="" className='nav-link cat_options'>Electronics & Accessories</a>
                <a href="" className='nav-link cat_options'>Gifts</a>
                <a href="" className='nav-link cat_options'>Home & Living</a>
                <a href="" className='nav-link cat_options'>Jewellery</a>
                <a href="" className='nav-link cat_options'>Paper & Party Supplies</a>
                <a href="" className='nav-link cat_options'>Shoes</a>
                <a href="" className='nav-link cat_options'>Toys & Games</a>
                <a href="" className='nav-link cat_options'>Wedding</a>
            </div>

        </div>
        </div>
        <div className="searchbar d-md-block d-none">
            <input type="text" placeholder='Search for anything' className='nav_search_input' />
            <i class="fa-solid fa-magnifying-glass navbar_search_icon"></i>

        </div>
        <div className="nav_leftside d-flex gap-2 align-items-center">
            <div className="sign_in">
            <Link to={"/signin"} className='nav-link hover_effect'>Sign in</Link>
            </div>
            <div className="rest_logos d-flex gap-2 align-items-center">
                <div className="nation">
                  <div className="nation_img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNIVC20pTJpnaO8qV6iWQwOssCaxIkegjjQ&s" alt="" />
                  </div>
                </div>
                <div className="wishlist ">
                <i class="fa-regular fa-heart rest_icons"></i>
                </div>
                <div className="gifts">
                <i class="fa-solid fa-gift rest_icons"></i>
                </div>
                <div className="cart">
                <i class="fa-solid fa-cart-shopping rest_icons"></i>
                </div>
            </div>
        </div>
       </div>
       <div className="bottom_nav_bar d-md-flex d-none justify-content-center py-1">
       <div className="gifts d-flex gap-2 align-items-center px-3 py-2">
                <i class="fa-solid fa-gift rest_icons"></i>
                <span>Gifts</span>
                </div>
                <a href="" className='nav-link d-inline-block px-4 py-2'>Early Festive Season Deals</a>
                <a href="" className='nav-link d-inline-block px-4 py-2'>Home Favourites</a>
                <a href="" className='nav-link d-inline-block px-4 py-2'>Fashion Finds</a>
                <a href="" className='nav-link d-inline-block px-4 py-2'>Registry</a>

       </div>
       <div className="mob_navbar d-flex py-2 d-md-none gap-2 align-items-center">
        <div className="mob_categories">
            <i className='fa-solid fa-bars'></i>
        </div>
        <div className="mob_searchbar">
            <input type="text" className='form-control px-2' placeholder='Search for anything'/>
            <i className='fa-solid fa-magnifying-glass'></i>
        </div>
       </div>
    </div>
  )
}

export default Navbar