import Link from 'next/link';
import Image from 'next/image';
import Post from './Post';

const SectionPosts = ({posts,users}) => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {posts.map((post) => (
                    <div className='item' key={post.id}>
                        <Post 
                        post_id={post.id}
                        title={post.title} 
                        user_id={post.user_id}
                        body={[]}
                        users={users} 
                        className="text-xl"
                        >
                        <div className="image">
                            <Link href={"/"}>
                                <Image src={"/images/img1.jpg"} width="400" height="600" alt="img"/>
                            </Link>
                        </div>
                        </Post>
                    </div>
                ))}
            </div>
        </section>
    );
}

// function Post() {
//     return (
//         <div className="item">
//             <div className="images">
//                 <Link href={"/"}>
//                     <Image src={"/images/img1.jpg"} className="rounded" width={500} height={500} alt=""/>
//                 </Link>
//             </div>
//             <div className="info flex justify-center flex-col py-4">
//                 <div className="cat">
//                     <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
//                     <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
//                 </div>
//                 <div className="title">
//                     <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
//                 </div>
//                 <p className='text-gray-500 py-3'>
//                     Even the all-powerfull Pointing has no control about the blind text it is an almost unorthographic life one day however a small line of blind text by the name lorem ipsum decided to leave for the far World of Grammar
//                 </p>
//                <h1>author</h1>
//             </div>
//         </div>
//     )
// }

export default SectionPosts;