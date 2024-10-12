import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home_page'>
        <div className="orangebox">
    <div className="mid_container">
    <h2>Discover the latest trends from small shops.</h2>
    <div className="main_catg d-flex gap-5">
        <div className="catg_div">
            <img src="https://i.etsystatic.com/26898518/r/il/d727b9/3193550477/il_300x300.3193550477_cydu.jpg" alt="" />
            <p>Mushroom motifs</p>
        </div>
        <div className="catg_div">
            <img src="https://i.etsystatic.com/7696744/r/il/e65a43/5550767229/il_300x300.5550767229_3vr6.jpg" alt="" />
            <p>Vintage Table Linens</p>
        </div>
        <div className="catg_div">
            <img src="https://i.etsystatic.com/7814711/c/1973/1973/472/1027/il/1e307f/1677113265/il_300x300.1677113265_djzr.jpg" alt="" />
            <p>Farmhouse Tables</p>
        </div>
        <div className="catg_div">
            <img src="https://i.etsystatic.com/30607862/c/2447/2447/0/282/il/e66137/5288720834/il_300x300.5288720834_bp2c.jpg" alt="" />
            <p>Pumpkin Spice</p>
        </div>
        <div className="catg_div">
            <img src="https://i.etsystatic.com/14313871/r/il/51cdb2/5196231180/il_300x300.5196231180_hx29.jpg" alt="" />
            <p>Suede Handbags</p>
        </div>
        <div className="catg_div">
            <img src="https://i.etsystatic.com/8229863/c/1440/1440/0/720/il/e768a5/4446334552/il_300x300.4446334552_oz21.jpg" alt="" />
            <p>Librariancore</p>
        </div>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Home