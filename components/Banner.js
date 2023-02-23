import Post from './Post';
import Link from 'next/link';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Banner({posts,users}) {
    SwiperCore.use([Autoplay]);

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
                    <SwiperSlide key={post.id}>
                        <div className="grid md:grid-cols-2">
                            <Post 
                            title={post.title} 
                            user_id={post.user_id}
                            body={post.body} 
                            users={users} 
                            className="text-3xl  md:text-6xl">
                            <div className="image">
                                <Link href={"/"}>
                                    <Image src={"/images/img1.jpg"} width="600" height="600" alt="img"/>
                                </Link>
                            </div>
                            </Post>
                        </div>
                    </SwiperSlide>)
                )}
                </Swiper>
            </div>
        </section>
    );
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