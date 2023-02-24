import Link from 'next/link';
import Image from 'next/image';
import Post from './Post';
import Author from './child/Author';

export default function SectionCategory(props) {
    const {posts,users} = props;
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item ">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className='flex flex-col gap-6'>
                        {/* {posts.map((post) => {
                            return (
                            <Post key={post.id} 
                            title={post.title} 
                            user_id={post.user_id}
                            body={[]}
                            users={users} 
                            className="text-xl"
                            width="300"
                            height="250"/>
                            );
                        })} */}
                        {posts.map((post) => (
                            <div className='flex gap-5' key={post.id}>
                                <Post
                                post_id={post.id}
                                title={post.title}
                                user_id={post.user_id}
                                users={users}
                                body={[]}
                                className="text-xl"
                                >
                                <div className="image flex flex-col justify-start">
                                    <Link href={{pathname: '/single-post/page',query:{post_id:post.id,user_id:post.user_id}}}><Image src={"https://source.unsplash.com/random/"} className="rounded" width={300} height={250} alt="img"/></Link>
                                </div>
                                </Post>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className='flex flex-col gap-6'>
                        {posts.map((post) => (
                            <div className='flex gap-5' key={post.id}>
                                <Post
                                post_id={post.id}
                                title={post.title}
                                user_id={post.user_id}
                                users={users}
                                body={[]}
                                className="text-xl"
                                >
                                <div className="image flex flex-col justify-start">
                                    <Link href={{pathname: '/single-post/page',query:{post_id:post.id,user_id:post.user_id}}}><Image src={"https://source.unsplash.com/random/"} className="rounded" width={300} height={250} alt="img"/></Link>
                                </div>
                                </Post>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// function Post({title,users,user_id}) {
//     const getTitle = () => {
//         //let sampleTitle = `Your most unhappy customers are your greatest source of learning`;
//         if(title.length >= 50) {
//             return title.substring(0,50)+" ...";
//         } else {
//             return title;
//         }
//     }

//     return (
//     <div className="flex gap-5">
//         <div className="image flex flex-col justify-start">
//             <Link href={"/"}><Image src={"/images/img1.jpg"} className="rounded" width={300} height={250} alt=""/></Link>
//         </div>
//         <div className="info flex justify-center flex-col">
//             <div className="cat">
//                 <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
//                 <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
//             </div>
//             <div className="title">
//                 <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{getTitle()}</a></Link>
//             </div>
//             <Author
//             users={users}
//             user_id={user_id}
//             />
//         </div>
//     </div>
//     );
// }