import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [extra, setExtra] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/refs/heads/main/etsy.json"
        );
        if (!response.ok) {
          throw new Error("API is not working....");
        }
        const data = await response.json().then((Data) => Data);
        console.log(data.extraordinary);
        setCategories(data.categories);
        setGifts(data.gifts);
        setExtra(data.extraordinary);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="home_page">
      <div className="orangebox">
        <div className="mid_container">
          <h2 className="text-center">
            Discover the latest trends from small shops.
          </h2>
          <div className="main_catg d-flex gap-5">
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/26898518/r/il/d727b9/3193550477/il_300x300.3193550477_cydu.jpg"
                alt=""
              />
              <p>Mushroom motifs</p>
            </div>
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/7696744/r/il/e65a43/5550767229/il_300x300.5550767229_3vr6.jpg"
                alt=""
              />
              <p>Vintage Table Linens</p>
            </div>
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/7814711/c/1973/1973/472/1027/il/1e307f/1677113265/il_300x300.1677113265_djzr.jpg"
                alt=""
              />
              <p>Farmhouse Tables</p>
            </div>
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/30607862/c/2447/2447/0/282/il/e66137/5288720834/il_300x300.5288720834_bp2c.jpg"
                alt=""
              />
              <p>Pumpkin Spice</p>
            </div>
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/14313871/r/il/51cdb2/5196231180/il_300x300.5196231180_hx29.jpg"
                alt=""
              />
              <p>Suede Handbags</p>
            </div>
            <div className="catg_div">
              <img
                src="https://i.etsystatic.com/8229863/c/1440/1440/0/720/il/e768a5/4446334552/il_300x300.4446334552_oz21.jpg"
                alt=""
              />
              <p>Librariancore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="featured_categories center_container py-4">
        <h3 className="mb-4">Featured categories</h3>
        <div className="d-flex gap-4 cat_container">
          {categories ? (
            categories.map((item) => (
              <div className="categories_div" key={item.id}>
                <img src={item.src} alt="" />
                <a href="" className="nav-link fs-6 fw-bold">
                  {item.name}
                </a>
              </div>
            ))
          ) : (
            <h4>No Data Found...</h4>
          )}
        </div>
      </div>
      <div className="popular_gifts center_container py-4 mt-5">
        <h3 className="mb-4">Popular gifts right now</h3>
        <div className="d-flex gap-2 gift_container">
          {gifts ? (
            gifts.map((item) => (
              <div className="gift_div" key={item.id}>
                <div className="gift_img_div">
                  <img src={item.src} alt="" />
                  <i className="fa-regular fa-heart wishlist_icon"></i>
                </div>
                <div className="gift_details">
                  <h3 className="fs-6 mt-1">{item.name}</h3>
                  <div className="ratings">
                    {item.rating
                      ? item.rating.map((rate) => <i className={rate}></i>)
                      : ""}
                    <span>({item.rating_no})</span>
                  </div>
                  <div className="price">
                    <span className="fw-bold">₹{item.price}</span>
                    <span className="text-success ps-1 text-decoration-line-through actual_price">
                      ₹{item.actual_price}
                    </span>
                    <span className="text-success ps-1 discount">
                      ({item.discount}% off)
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4>No Data Found...</h4>
          )}
        </div>
      </div>

      {/* -----------------------------------------------------Halloween-------------------------------------------------- */}

      <div className="halloween_shop center_container py-5 mt-5">
        <div className="halloween_1 d-flex gap-4">
          <div className="tagline">
            <p className="halo_p1 mb-0">Editors' Picks</p>
            <p className="halo_p2">Halloween Shop</p>
            <p className="halo_p3">
              Shop these unique finds{" "}
              <i className="fa-solid fa-arrow-right halo_right"></i>
            </p>
          </div>
          <div className="halo_img1 halow_div">
            <img
              src="https://i.etsystatic.com/11728305/r/il/3152ca/2535892283/il_680x540.2535892283_qzen.jpg"
              alt=""
            />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">₹1,262</div>
          </div>
          <div className="halo_img2 halow_div">
            <img
              src="https://i.etsystatic.com/24719125/c/2000/1589/0/247/il/190a0f/4157107940/il_680x540.4157107940_eh8l.jpg"
              alt=""
            />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">₹627</div>
          </div>
          <div className="halo_img3 halow_div">
            <img
              src="https://i.etsystatic.com/17221723/r/il/88445f/3378669165/il_680x540.3378669165_pfbv.jpg"
              alt=""
            />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">₹7,743</div>
          </div>
        </div>
        <div className="halloween_2 d-flex gap-4 mt-4">
          <div className="halo_v1 halow_div">
            <video
              src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/jhgbkjbnm_aea6nf.mp4"
              muted
              autoPlay
              loop
            ></video>
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">
              ₹2,087{" "}
              <span className="text-decoration-line-through">₹2,783</span>
            </div>
          </div>

          <div className="halo_v2 halow_div">
            <video
              src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Wideo_16.09.2023_14_20_24_pmridi.mp4"
              muted
              autoPlay
              loop
            ></video>
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">
              3,375 <span className="text-decoration-line-through">₹3,971</span>
            </div>
          </div>
          <div className="halo_img21 halow_div">
            <img
              src="https://i.etsystatic.com/8774385/r/il/b1c913/565518272/il_680x540.565518272_kfem.jpg"
              alt=""
            />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            <div className="halo_price">₹3,696</div>
          </div>
          <div className="halo_img3 d-flex justify-content-center align-items-center">
            <p>Get spooky-season picks at scary good prices.</p>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------Autumn-------------------------------------------------- */}

      <div className="autumn_container center_container py-5 mt-5">
        <div className="autumn_inner_container d-flex  border border-1">
          <div className="autumn_cont1 p-4">
            <div className="halloween_1 d-flex flex-wrap gap-3">
              <div className="tagline">
                <p className="halo_p1 mb-0">Editors' Picks</p>
                <p className="halo_p2">Autumn hosting and decor</p>
                <p className="halo_p3">
                  See more{" "}
                  <i className="fa-solid fa-arrow-right halo_right"></i>
                </p>
              </div>
              <div className="autumn_img1">
                <img
                  src="https://i.etsystatic.com/8118504/r/il/12c2b5/5307260486/il_300x300.5307260486_6rrv.jpg"
                  alt=""
                />
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹1,740</div>
              </div>
              <div className="autumn_img1">
                <video
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_5022_ahjvx2.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹5,402</div>
              </div>
              <div className="autumn_img1">
                <video
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_bvqxg0.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹2,666</div>
              </div>
              <div className="autumn_img1">
                <video
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_7765_slrqup.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹385</div>
              </div>
              <div className="autumn_img1">
                <video
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/VID_20210610_120456_hts7uk.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹5,971</div>
              </div>
              <div className="autumn_img1">
                <video
                  src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_cs7sda.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <i className="fa-regular fa-heart wishlist_icon"></i>
                <div className="halo_price">₹3,915</div>
              </div>
            </div>
          </div>
          <div className="autumn_cont2">
            <div className="autmn_video2">
              <video
                src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/original-E9B9B8E8-6F73-4D3D-AD0D-1ABCD95E47BE_tdqnix.mp4"
                muted
                autoPlay
                loop
              ></video>
              <i className="fa-regular fa-heart wishlist_icon"></i>
              <div className="halo_price">₹452</div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------Extraordinary Items-------------------------------------------------- */}

      <div className="extraordinary_items center_container py-5 mt-5">
        <h3 className="pb-2">Shop extraordinary items at special prices.</h3>
        <div className="extraordinary_inner_cont d-flex gap-2">
          {extra ? (
            extra.map((item) => (
              <div className="extraordinary_item p-2">
                <div className="extra_o_image">
                  <img src={item.src} alt="" />
                </div>
                <p className="extra_detail mt-2">{item.detail}</p>
              </div>
            ))
          ) : (
            <h3>Data not Found...</h3>
          )}
        </div>
      </div>

      {/* ------------------------------------------------Discover------------------------------------------------------------ */}

      <div className="discover center_container py-5 mt-5">
        <div className="d-flex gap-3">
          <div className="tagline d-flex justify-content-center align-items-start flex-column me-2">
            <p className="halo_p1 mb-1">Local finds? Etsy has it.</p>
            <p className="halo_p2">Discover shops in India</p>
            <a href="" className="nav-link discover_link">
              Shop from local makers
            </a>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img">
            <img src="https://i.etsystatic.com/21239541/r/il/4def9d/4910855112/il_570xN.4910855112_dh40.jpg" alt="" />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            </div>
            <p className="discover_item_detail d-flex align-items-center gap-3 p-3"><img src="https://i.etsystatic.com/isla/bf4e84/50083633/isla_75x75.50083633_n58k8k4l.jpg?version=0" alt="" />
            <span>HeritageKosh</span></p>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img">
            <img src="https://i.etsystatic.com/30722423/r/il/561059/4023032570/il_570xN.4023032570_9326.jpg" alt="" />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            </div>
            <p className="discover_item_detail d-flex align-items-center gap-3 p-3"><img src="https://i.etsystatic.com/isla/686b26/53308097/isla_75x75.53308097_8g8tljs6.jpg?version=0" alt="" />
            <span>HastaKushalIndia</span></p>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img_last">
            <img src="https://i.etsystatic.com/27064451/r/il/c99ba8/4369201826/il_570xN.4369201826_3la4.jpg" alt="" />
            <i className="fa-regular fa-heart wishlist_icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
