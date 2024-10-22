import {React, useState} from 'react'
import "./Navbar.css"
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import google from "../../../assets/images/google.png"

function Navbar() {
    let [cat,setCat] = useState("hide")
    const [mobCat, SetMobCat] =useState("hide")
    const [signin, setSignin] = useState("hide")
    function toggle(){
        if(cat === "hide"){
            setCat("show")
        }else{
            setCat("hide")
        }
    }
  return (
    <div className='container etsy_navbar pt-md-3 pt-2 pt-md-0 px-0 px-3 px-md-0'>
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
            <div  className='nav-link hover_effect' onClick={()=>setSignin("show")}>Sign in</div>
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
            <i className='fa-solid fa-bars'  onClick={()=>SetMobCat("show")}></i>
            <div className="mob_category" style={ mobCat==="show"? {display:"flex"} : {display:"none"}}>
                <div className="mob_cat_items p-2">
                    <div className="mob_cat d-flex justify-content-between align-items-center">
                        <span></span>
                        <span className='fs-5'>Browse Categories</span>
                        <i className='fa fa-x' onClick={()=>SetMobCat("hide")}></i>
                    </div>

                    <div className="main_mob_cat_item">
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'>Early Festive Season Deals</a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Jewellery & Accessories</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Clothing & Shoes</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Home & Living</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Wedding & Party</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Toy & Entertainment</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Art & Collectibles</span> <i className='fa fa-angle-right'></i></a>
                        <a href="" className='d-flex justify-content-between align-items-center py-3 pb-1 nav-link'><span>Craft Supplies & Tools</span> <i className='fa fa-angle-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mob_searchbar">
            <input type="text" className='form-control px-2' placeholder='Search for anything'/>
            <i className='fa-solid fa-magnifying-glass'></i>
        </div>
       </div>
       <div className="signinPage" style={ signin==="show"? {display:"flex"} : {display:"none"}}>
        <div className="signin_container p-4">
        <div className="top_area d-flex justify-content-between">
            <h5>Sign in</h5>
            <button className='btn border border-2 border-black rounded-5'>Register</button>
        </div>
        <div className="signin_form">
            <label htmlFor="" className='form_label'>Email address</label>
            <input type="email" className='form-control border border-2' />
            <label htmlFor="" className='form_label'>Password</label>
            <input type="password" className='form-control border border-2' />
           <div className="terms d-flex justify-content-between align-items-center">
          <div className="checkboxes d-flex justify-content-center align-items-center gap-2">
          <input type="checkbox" name="" id=""  className='mt-3'/>
          <label htmlFor="" className='mt-3'>Stay signed in</label>
          </div>
            <a href="" className='text-secondary mt-3 forgot_password'>Forgot your password?</a>
           </div>
           <button className='btn bg-dark text-white w-100 rounded-5 py-2 fw-bold mt-3'> Sign in</button>
           <a href="" className='trouble'>Trouble signing in ?</a>
           <div className="or_container d-flex align-items-center gap-2 mt-3">
            <div className="left"></div>
            <span className='text-secondary'>OR</span>
            <div className="left"></div>
           </div>
           <div className="buttons_container my-3">
            <button className='btn border border-2 border-black rounded-5 w-100 py-2 mb-3 d-flex justify-content-center gap-2 align-items-center'> <img src={google} alt="" /><span>Continue with Google</span></button>
            <button className='btn border border-2 border-black rounded-5 w-100 py-2 mb-3 d-flex justify-content-center gap-2 align-items-center'><i className="fa-brands fa-square-facebook text-primary"></i><span>Continue with Facebook</span></button>
            <button className='btn border border-2 border-black rounded-5 w-100 py-2 mb-3 d-flex justify-content-center gap-2 align-items-center'><i class="fa-brands fa-apple"></i><span>Continue with Apple</span></button>
           </div>
           <p className='terms_conditions mb-2'>By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
           <p className='etsy_policy'>Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
        </div>
        </div>
        <i className='fa fa-x text-white fs-5' onClick={()=>setSignin("hide")}></i>
       </div>
    </div>
  )
}

export default Navbar