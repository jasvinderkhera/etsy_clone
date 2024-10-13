import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const fetchData = async() =>  {
            try{
              const response = await fetch('https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/refs/heads/main/etsy.json')
              if(!response.ok){
                throw new Error('API is not working....')
              }
              const data =  await response.json().then((Data)=>Data.categories)
              console.log(data)
              setCategories(data)
            }catch(error){
            }
            
          }
          fetchData()
    },[])
  return (
    <div className='home_page'>
        <div className="orangebox">
    <div className="mid_container">
    <h2 className='text-center'>Discover the latest trends from small shops.</h2>
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
        <div className="featured_categories center_container py-4">
            <h3 className='mb-4'>Featured categories</h3>
            <div className="d-flex gap-4 cat_container">
           {categories ? categories.map((item)=>(
            <div className="categories_div" key={item.id}>
                <img src={item.src} alt="" />
                <a href='' className='nav-link fs-6 fw-bold'>{item.name}</a>
            </div>
           )): <h4>No Data Found...</h4>} 
            </div>

        </div>
        <div className="popular_gifts center_container py-4 mt-5">
        <h3 className='mb-4'>Popular gifts right now</h3>
        <div className="d-flex gift_container">
            <div className="gift_div">
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home