import React from 'react'
import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Home() {
    const [data, setdata] = useState([])
    const [sortdata, setsortdata] = useState([])
    let a = 0;
    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setdata(res.data))
    }, [])
    const salam = () => {
        setdata(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
        let a = 1;
    };
    console.log(data);
    return (
        <div className='home'>
            <div className='section1'>
                <div className='section1_bg1'>
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp" alt="" />
                    <div className='section1_bg1_text'>
                        <h4>Shop is fun</h4>
                        <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button>Browse Now</button>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <p>Popular Item in the market</p>
                <h2>Trending Product</h2>
                <div className='card'>
                    {
                        data.map((x) => (
                            <div key={x.id} className="cards">
                                <img src={x.imageUrl} alt="" />
                                <p className='category'>{x.category}</p>
                                <Link>{x.name}</Link>
                                <p className='prices'>${x.price}.00</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='section3'>
                <div className='section3_text'>
                    <h3>Up To 50% Off</h3>
                    <h4>Winter Sale</h4>
                    <p>Him she'd let them sixth saw light</p>
                    <Link><button>Shope Now</button></Link>
                </div>
            </div>
            <div className='section4'>
                <p>Popular Item in the market</p>
                <h2>Latest News</h2>
                <div className='section4_cards'>
                    <div className='section4_card'>
                        <div className='section4_card_img'><img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp" alt="" /></div>
                        <div className='section4_card_text'>
                            <ul>
                                <li><Link>By Admin</Link></li>
                                <li><Link> 2 Comments</Link></li>
                            </ul>
                            <h4><Link>The Richland Center Shooping News and weekly shooper</Link></h4>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <Link >Read More - </Link>
                        </div>
                    </div>
                    <div className='section4_card'>
                        <div className='section4_card_img'><img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp" alt="" /></div>
                        <div className='section4_card_text'>
                            <ul>
                                <li><Link>By Admin</Link></li>
                                <li><Link> 2 Comments</Link></li>
                            </ul>
                            <h4><Link>The Richland Center Shooping News and weekly shooper</Link></h4>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <Link >Read More - </Link>
                        </div>
                    </div>
                    <div className='section4_card'>
                        <div className='section4_card_img'><img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp" alt="" /></div>
                        <div className='section4_card_text'>
                            <ul>
                                <li><Link>By Admin</Link></li>
                                <li><Link> 2 Comments</Link></li>
                            </ul>
                            <h4><Link>The Richland Center Shooping News and weekly shooper</Link></h4>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <Link >Read More - </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={salam}>1</button>
        </div>
    )
}

export default Home