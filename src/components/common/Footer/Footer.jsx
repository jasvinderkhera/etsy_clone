import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer_container'>
        <div className="mail_container">
          <div className="center_container p-4 text-center">
            <p className='pt-2'>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
            <div className="mail_div">
              <input type="text" placeholder='Enter your email' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="renewable_container">
          <div className="center_container d-flex align-items-center justify-content-center gap-3 p-4">
            <div className="image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
  <path d="M60.1 38H49v11h-2V38H35.9c1.931 9.368 6.626 17 12.1 17 5.474 0 10.171-7.632 12.1-17zm-25.145-9.5c-.003 2.511.19 5.019.577 7.5H47V18.522l-10.925.238a41.683 41.683 0 00-1.12 9.74zM47 2.31c-4.1 1.24-8.18 7.168-10.38 14.437L47 16.52V2.31z"></path>
  <path d="M57.52 9.45l1.784-.9a31.775 31.775 0 012.558 7.65l9.117-.2.042 2-8.78.19c.55 3.41.818 6.857.8 10.31a50.836 50.836 0 01-.54 7.5H72v2h-9.846c-1.6 8.2-5.244 15.053-9.862 17.754C66.834 54.079 76 43.793 76 28.589c0-8.962-2.958-16.353-8.554-21.373A25.424 25.424 0 0049 1.04v15.438l10.83-.236a29.32 29.32 0 00-2.31-6.791zM43.51 55.643c-4.525-2.78-8.086-9.564-9.665-17.643H24v-2h9.5a50.84 50.84 0 01-.549-7.5 43.776 43.776 0 011.075-9.7l-9.009.2-.042-2 9.562-.208c1.89-6.667 5.317-12.436 9.432-15.143C29.71 4.412 20 15.13 20 28.589a27.636 27.636 0 0023.51 27.054z"></path>
  <path d="M61.045 28.5a60.27 60.27 0 00-.818-10.265L49 18.479v17.52h11.468c.388-2.48.58-4.988.577-7.5zM91.7 60c-2.182 4.525-5.734 8.62-10.832 13.719l-1.414-1.414c6.6-6.6 10.511-11.424 12.08-17.7.072-.415.137-.832.215-1.278.607-3.48.262-5.951-1.027-6.068-.72-.066-1.559.68-1.947 2.3a30.158 30.158 0 01-2.454 8.148c-1.78 4.663-8.575 11.048-8.865 11.318l-1.366-1.461c.068-.063 6.8-6.391 8.381-10.62l.061-.133a30.644 30.644 0 002.526-9.148c.11-1.886.095-6.433-1.793-6.552-2.085-.132-2.537 3.505-3.367 7.379-.259 1.21-.89 3.456-1.153 4.243a1.55 1.55 0 01-.09.177c-1.386 4.053-5.32 7.859-5.515 8.045-2.984 2.983-9.707 9.74-9.707 9.74L64.01 69.3s6.726-6.761 9.727-9.761a28.158 28.158 0 003.064-3.6c.5-.788 1.452-2.646.55-3.572-1.148-1.178-3.287-.648-6.08.748-1.98.992-11.21 7.08-15.384 13.34-1.99 2.985-2.772 8.839-3.042 14.2l13.18 2.724 6.8 1.359a8.92 8.92 0 011-.778c7.075-4.74 14.663-11.833 17.317-16.54 3.566-6.32 1.988-7.52.558-7.42zM52.774 82.673l-.77 10.252 1.993.15.595-7.913 10.616 2.123 3.765.778L70.02 93.2l1.96-.4-.885-4.338 2.592.518.392-1.96-8.447-1.69-12.858-2.657zm-29.242 2.055l6.77-1.354 13.206-2.73c-.27-5.36-1.052-11.214-3.042-14.2-4.173-6.258-13.4-12.347-15.384-13.34-2.793-1.4-4.932-1.925-6.08-.747-.9.926.054 2.784.55 3.572a28.158 28.158 0 003.064 3.6c3 3 9.727 9.76 9.727 9.76l-1.418 1.41s-6.723-6.757-9.707-9.74c-.2-.186-4.129-3.992-5.515-8.045a1.74 1.74 0 01-.09-.177c-.263-.787-.894-3.033-1.153-4.243-.83-3.874-1.282-7.511-3.367-7.38-1.888.12-1.9 4.667-1.793 6.553a30.645 30.645 0 002.526 9.148l.061.133c1.58 4.229 8.313 10.557 8.381 10.62L18.9 69.034c-.29-.27-7.084-6.655-8.865-11.318a30.16 30.16 0 01-2.454-8.148c-.388-1.622-1.226-2.37-1.947-2.3-1.287.114-1.634 2.586-1.025 6.065.078.446.143.863.215 1.278C6.394 60.883 10.3 65.7 16.9 72.307l-1.41 1.414c-5.1-5.1-8.65-9.194-10.832-13.72-1.434-.104-3.013 1.1.553 7.42 2.654 4.706 10.238 11.8 17.321 16.529a8.92 8.92 0 011 .778zm7.175.605l-8.433 1.687.393 1.96 2.591-.518-.885 4.338 1.96.4 1.047-5.137 3.75-.775 10.631-2.126.595 7.913 1.994-.15-.77-10.252-12.873 2.66z"></path>
</svg>
            </div>
            <p className='mb-0 text-white'>Etsy is powered by 100% renewable electricity.</p>
          </div>
        </div>
        <div className="footer_main_container">
          <div className="grid_container">
            <div className="row">
              <div className="col-md-4 app_container p-3">
                <img src="https://seeklogo.com/images/E/etsy-logo-9CE3C0743D-seeklogo.com.png" alt="" />
                <Link className='nav-link app_link'>Download the Etsy App</Link>
              </div>
              <div className="col-md-8 px-4 py-4">
                <div className="row">
                  <div className="col-md-3 px-4 f_list f_1">
                    <h6 className='text-white'>Shop</h6>
                    <ul>
                      <li><a href="" className='nav-link'>Gift cards</a></li>
                      <li><a href="" className='nav-link'>Etsy Registry</a></li>
                      <li><a href="" className='nav-link'>Sitemap</a></li>
                      <li><a href="" className='nav-link'>Etsy blog</a></li>
                      <li><a href="" className='nav-link'>Etsy United Kingdom</a></li>
                      <li><a href="" className='nav-link'>Etsy Germany</a></li>
                      <li><a href="" className='nav-link'>Etsy Canada</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 px-4 f_list f_1">
                    <h6 className='text-white'>Sell</h6>
                    <ul>
                      <li><a href="" className='nav-link'>Sell on Etsy</a></li>
                      <li><a href="" className='nav-link'>Teams</a></li>
                      <li><a href="" className='nav-link'>Forums</a></li>
                      <li><a href="" className='nav-link'>Affiliates & Creators</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 px-4 f_list f_1">
                    <h6 className='text-white'>About</h6>
                    <ul>
                      <li><a href="" className='nav-link'>Etsy, Inc.</a></li>
                      <li><a href="" className='nav-link'>Policies</a></li>
                      <li><a href="" className='nav-link'>Investors</a></li>
                      <li><a href="" className='nav-link'>Carrers</a></li>
                      <li><a href="" className='nav-link'>Press</a></li>
                      <li><a href="" className='nav-link'>Impact</a></li>
                      <li><a href="" className='nav-link'>Legal imprint</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 px-4 f_list f_1">
                    <h6 className='text-white'>Help</h6>
                    <ul>
                      <li><a href="" className='nav-link'>Help Centre</a></li>
                      <li><a href="" className='nav-link'>Privacy settings</a></li>
                    </ul>
                    <div className="social_media d-flex gap-4 text-white">
                      <div className="footer_social">
                      <i class="fa-brands fa-instagram"></i>
                      </div>
                      <div className="footer_social">
                      <i class="fa-brands fa-square-facebook"></i>
                      </div>
                      <div className="footer_social">
                      <i class="fa-brands fa-pinterest"></i>
                      </div>
                      <div className="footer_social">
                      <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div className="footer_social">
                      <i class="fa-brands fa-youtube"></i>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_end bg-dark">
       <div className="footer_end_container">
        <div className="d-flex">
          <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNIVC20pTJpnaO8qV6iWQwOssCaxIkegjjQ&s" alt="" style={{height:"20px",width:"20px",borderRadius:"50%"}} /></span>
          <span className='text-white ps-2 fw-bold'>India</span>
          <span className='text-white ps-2 fw-bold'>|</span>
          <span className='text-white ps-2 fw-bold'>English (IN)</span>
          <span className='text-white ps-2 fw-bold'>|</span>
          <span className='text-white ps-2 fw-bold'>₹(INR)</span>
        </div>
        <div className="d-flex gap-3 text-white">
          <span className='ps-2'><i class="fa-regular fa-copyright"></i> 2024 Etsy, Inc</span>
          <a href="" className='text-white'>Terms of Use</a>
          <a href="" className='text-white'>Privacy</a>
          <a href="" className='text-white'>Interest-based ads</a>
          <a href="" className='text-white'>Local Shops</a>
          <a href="" className='text-white'>Region</a>
        </div>
       </div>

        </div>
    </div>
  )
}

export default Footer