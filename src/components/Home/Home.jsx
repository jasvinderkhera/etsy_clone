import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [extra, setExtra] = useState([]);
  const [blog, setBlog] = useState([]);
  let [toggle, setToggle] = useState("hide");
  

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
        // console.log(data);
        setCategories(data.categories);
        setGifts(data.gifts);
        setExtra(data.extraordinary);
        setBlog(data.blog);
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
          <div className="main_catg d-flex gap-md-5 gap-3 flex-wrap">
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
        <h3 className="mb-4 text-center text-md-start">Popular gifts right now</h3>
        <div className="d-flex flex-wrap flex-md-nowrap gap-md-2 gap-1 gift_container">
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

      <div className="halloween_shop center_container py-md-5 py-0 pt-4 mt-5">
      <div className="d-block d-md-none text-center">
          <p className="halo_p1 mb-0">Editors' Picks</p>
          <p className="halo_p2 fs-5">Halloween Shop</p>
          </div>
        <div className="halloween_1 d-flex gap-4">
          <div className="tagline d-none d-md-block">
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
          <div className="halo_img3 d-none d-md-flex justify-content-center align-items-center">
            <p>Get spooky-season picks at scary good prices.</p>
          </div>
        </div>
          <div className="d-md-none d-block text-center mt-4 fs-6"> See more <i className="fa-solid fa-arrow-right"></i></div>
      </div>

      {/* -----------------------------------------------------Autumn-------------------------------------------------- */}

      <div className="autumn_container center_container py-md-5 py-0 pt-4 mt-md-5 mt-2">
        <div className="autumn_inner_container d-flex  border border-1">
          <div className="autumn_cont1 p-md-4 py-4 px-1">
            <div className="halloween_1 d-flex flex-wrap gap-3">
              <div className="tagline">
                <p className="halo_p1 mb-0 text-center text-md-start">Editors' Picks</p>
                <p className="halo_p2">Autumn hosting and decor</p>
                <p className="halo_p3 d-none d-md-block">
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
          <div className="autumn_cont2 d-none d-md-block">
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
        <div className="d-block d-md-none text-center">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      {/* -----------------------------------------------Extraordinary Items-------------------------------------------------- */}

      <div className="extraordinary_items center_container py-md-5 py-0 pt-4 mt-md-5 mt-2">
        <h3 className="pb-2">Shop extraordinary items at special prices.</h3>
        <div className="extraordinary_inner_cont d-flex flex-wrap flex-md-nowrap gap-1">
          {extra ? (
            extra.map((item) => (
              <div className="extraordinary_item p-md-2 p-1">
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
        <div className="d-flex flex-column flex-md-row gap-3">
          <div className="tagline d-flex justify-content-center align-items-md-start align-items-center flex-column me-2">
            <p className="halo_p1 mb-1">Local finds? Etsy has it.</p>
            <p className="halo_p2">Discover shops in India</p>
            <a href="" className="nav-link discover_link">
              Shop from local makers
            </a>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img">
              <img
                src="https://i.etsystatic.com/21239541/r/il/4def9d/4910855112/il_570xN.4910855112_dh40.jpg"
                alt=""
              />
              <i className="fa-regular fa-heart wishlist_icon d-none d-md-block"></i>
            </div>
            <p className="discover_item_detail d-flex align-items-center gap-md-3 p-md-3 gap-2 p-2">
              <img
                src="https://i.etsystatic.com/isla/bf4e84/50083633/isla_75x75.50083633_n58k8k4l.jpg?version=0"
                alt=""
              />
              <span>HeritageKosh</span>
            </p>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img">
              <img
                src="https://i.etsystatic.com/30722423/r/il/561059/4023032570/il_570xN.4023032570_9326.jpg"
                alt=""
              />
              <i className="fa-regular fa-heart wishlist_icon d-none d-md-block"></i>
            </div>
            <p className="discover_item_detail d-flex align-items-center gap-md-3 p-md-3 gap-2 p-2">
              <img
                src="https://i.etsystatic.com/isla/686b26/53308097/isla_75x75.53308097_8g8tljs6.jpg?version=0"
                alt=""
              />
              <span>HastaKushalIndia</span>
            </p>
          </div>
          <div className="discover_items border border-1">
            <div className="discover_item_img_last">
              <img
                src="https://i.etsystatic.com/27064451/r/il/c99ba8/4369201826/il_570xN.4369201826_3la4.jpg"
                alt=""
              />
              <i className="fa-regular fa-heart wishlist_icon d-none d-md-block"></i>
            </div>
            <span className="d-block d-md-none px-4">
            HazelCraftsStore
        </span>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------Blog---------------------------------------------------------------- */}
      <div className="blog_container center_container py-5 mt-5">
        <h3 className="text-center text-md-start">
          Fresh from the blog{" "}
          <i className="fa-solid fa-arrow-right blog_arrow"></i>
        </h3>
        <div className="blog_items d-flex flex-column flex-md-row gap-3 mt-4">
          {blog ? (
            blog.map((item) => (
              <div className="blog_item">
                <div className="blog_img">
                  <img src={item.src} alt="" />
                </div>
                <div className="blogs_detailed">
                <div className="blog_cat px-md-3 px-3 pt-3">
                  <span>{item.tag}</span>
                </div>
                <div className="blog_details p-md-3 px-3 py-2">
                  <h5>{item.heading}</h5>
                  <p className="d-none d-md-block">{item.detail}</p>
                </div>
                </div>
              </div>
            ))
          ) : (
            <h4>"Data Not Found..."</h4>
          )}
        </div>
      </div>

      {/* -----------------------------------------------FAQ----------------------------------------------------------------- */}

      <div className="faq_container py-5 mt-5">
        <div className="center_container px-4">
          <h2 className="text-center fw-light fs-1">What is Etsy India?</h2>
          <a href="" className="text-center d-block text-secondary ">
            Read our wonderfully weird story
          </a>
          <div className="questions">
            <div className="question">
              <p className="mb-0 d-flex justify-content-between align-items-center">
                Etsy is a global marketplace for creative and one-of-a-kind
                goods. It’s home to a universe of special,
                <i className="fa-solid fa-angle-down" onClick={()=>(
                  toggle === "q1" ? setToggle("hide") : setToggle("q1"))}></i>
              </p>
              <div
                className="toggle_div"
                style={
                  toggle === "q1" ? { display: "block" } : { display: "none" }
                }
              >
                <p>
                  extraordinary items, from unique home decor pieces to trending
                  fashion finds. Founded in 2005, Etsy began its Indian journey
                  in 2018.
                </p>
                <p>
                  Etsy is a place where creativity lives and thrives because
                  it’s powered by people just like you. We help our community of
                  5.9 million active sellers worldwide turn their ideas into
                  successful small businesses. Our platform connects them with
                  89.9 million active buyers looking for something special that
                  enables them to express their unique identity.
                </p>
              </div>
            </div>
            <div className="question mt-5">
              <h5>Why choose Etsy?</h5>
              <p className="mb-0 d-flex justify-content-between align-items-center mt-4">
             <h6> A community doing good</h6>
                <i className="fa-solid fa-angle-down" onClick={()=>(
                  toggle === "q2" ? setToggle("hide") : setToggle("q2"))}></i>
              </p>
              <div
                className="toggle_div"
                style={
                  toggle === "q2" ? { display: "block" } : { display: "none" }
                }
              >
                <p>
                Etsy is where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together:
                </p>
                <p>
                Your purchases on Etsy in 2021 generated nearly $4 billion in income for small businesses.
                </p>
                <p>
                We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.
                </p>
                <p>
                We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.
                </p>
                <p>
                  <h6>Support independent creators</h6>
                There’s no Etsy warehouse—just millions of people selling the things they love. We make the whole process easy, helping you connect directly with talented artisans from across the world (including India) to find something extraordinary.
                </p>
                <p>
                  <h6>Peace of mind</h6>
                  With Etsy Purchase Protection, you can shop confidently, knowing if something goes wrong with your order, we’ve got your back for all eligible purchases. If you ever need assistance, we are always ready to step in for support.
                </p>
              </div>
            </div>
            <div className="question mt-5">
              <h5>What can you shop on Etsy?</h5>
              <p className="mb-0 d-flex justify-content-between align-items-center mt-4">
              The imagination of Etsy sellers can run far and wide, which makes our platform a home to more than 100
                <i className="fa-solid fa-angle-down" onClick={()=>(
                  toggle === "q3" ? setToggle("hide") : setToggle("q3"))}></i>
              </p>
              <div
                className="toggle_div"
                style={
                  toggle === "q3" ? { display: "block" } : { display: "none" }
                }
              >
                <p className="mt-4">
                <b>Home & Living:</b> Whether you’re setting up a new apartment or making small upgrades for a home refresh, you’ll find everything you need to make your home a reflection of your personality on Etsy. From traditional elements like Jaipuri bedding, masala boxes, and Madhubani paintings to modern essentials like sleek table lamps, vibrant indoor planters, and decorative platters, Etsy sellers have much to offer.
                </p>
                <p>
               <b>Clothing:</b> Your unique fashion style deserves outfits that can match it. Discover tie-dye kaftans, linen shirts, hand-painted sarees, chikankari kurtis, ajrakh scarves and so much more—from small sellers who understand your aesthetic just as much as your comfort.
                </p>
                <p>
                <b>Accessories:</b> The gajra for your friend’s haldi ceremony or the gemstone ring that represents your zodiac—sometimes, the little things can make the biggest impact. Etsy has it all and more! Explore a range of beautiful fashion accessories and jewellery for all the occasions you have planned.
                </p>
                <p>
                <b>Gifts:</b> From birthdays and anniversaries to festivals and weddings, we’ve got all the special moments in life covered. You’ll easily find the perfect presents that not only match the unique personalities of your loved ones perfectly but also make them feel seen and cherished.
                </p>
              </div>
            </div>
            <div className="question mt-5">
              <h5>How to buy on Etsy?</h5>
              <p className="mb-0 d-flex justify-content-between align-items-center mt-4">
              If you’re looking for something specific, start by putting in the keywords in our search and then using filters 
                <i className="fa-solid fa-angle-down" onClick={()=>(
                  toggle === "q4" ? setToggle("hide") : setToggle("q4"))}></i>
              </p>
              <div
                className="toggle_div"
                style={
                  toggle === "q4" ? { display: "block" } : { display: "none" }
                }
              >
                <p>
                to narrow down the results. You can even message the sellers with any questions or requests you may have before placing an order with them.
                </p>
                <p className="mt-4">
                If you’re looking for inspiration, head on over to our <a href="" className="text-dark">Editor’s Picks</a> or look out for the latest updates on our <a href="" className="text-dark">Journal</a> to discover extraordinary items.
                </p>
               
              </div>
            </div>
            <div className="question mt-5">
              <h5>How to sell on Etsy?</h5>
              <p className="mb-0 d-flex justify-content-between align-items-center mt-4">
              You can sell handmade goods, vintage items, and craft supplies on Etsy. With low fees, powerful tools, and 
                <i className="fa-solid fa-angle-down" onClick={()=>(
                  toggle === "q5" ? setToggle("hide") : setToggle("q5"))}></i>
              </p>
              <div
                className="toggle_div"
                style={
                  toggle === "q5" ? { display: "block" } : { display: "none" }
                }
              >
                <p>
                support and education, we help creative entrepreneurs start, manage, and scale their businesses. Want to open a shop? All it takes is Rs. 16* to <a href="" className="text-dark">start selling on Etsy</a>.
                </p>
                <p className="mt-4">
                *Listing fees are billed for 0.20 USD, so if your bank's currency is not USD, the amount in your currency may vary based on changes in the exchange rate.
                </p>
               
              </div>
            </div>
          </div>

          <h5 className="mt-5 text-center">Have a question? Well, we’ve got some answers.</h5>
          <a href="" className="nav-link faq_btn">Go to Help Centre</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
