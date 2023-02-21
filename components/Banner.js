import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Banner() {
    SwiperCore.use([Autoplay]);
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            try {
                let url = `https://gorest.co.in/public/v2/posts?page=1&per_page=5`;
                let response = await fetch(url);

                if(!response.ok) {
                    throw new Error(`Terjadi gangguan: ${response.status}}`);
                }

                let data = await response.json();
                console.log(data);
                setPosts(data);
            }
            catch(error) {
                console.log(error);
            }
        }
        dataFetch();
    },[]);
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-5">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000
                }}
                >
                {posts.map((post) => (
                    <SwiperSlide>
                        <Slide title={post.title} body={post.body}/>
                    </SwiperSlide>)
                )}
                {/* <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide> */}
                </Swiper>
            </div>
        </section>
    );
}

const Slide = function({title,body}) {
    const getTitle = () => {
        //let sampleTitle = `Your most unhappy customers are your greatest source of learning`;
        if(title.length >= 50) {
            return title.substring(0,50)+" ...";
        } else {
            return title;
        }
    }
    // getTitle();
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} width={600} height={600} alt=""/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{getTitle()}</a></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    {body}
                </p>
                <h1>author</h1>
            </div>
        </div>
    )
}

// function Slide() {
//     return (
//         <div className="grid md:grid-cols-2">
//             <div className="image">
//                 <Link href={"/"}>
//                     <Image src={"/images/img1.jpg"} width={600} height={600} alt=""/>
//                 </Link>
//             </div>
//             <div className="info flex justify-center flex-col">
//                 <div className="cat">
//                     <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
//                     <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
//                 </div>
//                 <div className="title">
//                     <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
//                 </div>
//                 <p className='text-gray-500 py-3'>
//                     Even the all-powerfull Pointing has no control about the blind text it is an almost unorthographic life one day however a small line of blind text by the name lorem ipsum decided to leave for the far World of Grammar
//                 </p>
//                 <h1>author</h1>
//             </div>
//         </div>
//     )
// }