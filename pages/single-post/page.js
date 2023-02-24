import React,{useState,useEffect} from 'react';
import Template from '../../layout/Template';
import Author from '../../components/child/Author';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Comment from '../../components/child/comment/Comment';
import CommentForm from '../../components/child/comment/CommentForm';

export default function Page() {
    const router = useRouter();

    const {
        query: {post_id,user_id}
    } = router;

    const props = {
        post_id,
        user_id,
    };

    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    const [comments,setComments] = useState([]);
    useEffect(() => {
        const dataFetch = async () => {
            try {
                let urlPosts = `https://gorest.co.in/public/v2/posts`;
                let urlUsers = `https://gorest.co.in/public/v2/users`;
                let urlComments = `https://gorest.co.in/public/v2/comments`;
                let responsePosts = await fetch(urlPosts);
                let responseUsers = await fetch(urlUsers);
                let responseComments = await fetch(urlComments);
  
                if(!responsePosts.ok && !responseUsers.ok && !responseComments.ok) {
                    throw new Error(`Terjadi gangguan: ${response.status}}`);
                }
                
                let dataPosts = await responsePosts.json();
                let dataUsers = await responseUsers.json();
                let dataComments = await responseComments.json();
                
                setPosts(dataPosts);
                setUsers(dataUsers);
                setComments(dataComments);
            }
            catch(error) {
                console.log(error);
            }
        }
        dataFetch();
    },[]);
    //console.log(props.body);
    return (
        <Template>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center ">
                    {/* <Author users={users}></Author> */}
                    <Author users={users} user_id={props.user_id}></Author>
                </div>
                    {posts.map((post) => {
                        if(post.id == props.post_id) {
                            return (
                            <div className="post py-10" key={post.id}>
                            <h1 className='font-bold text-4xl text-center pb-'>{post.title}</h1>
                            <div className='py-10'>
                                <Image src={"/images/img1.jpg"} width={900} height={600} alt="img"/>
                            </div>
                            <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                                {post.body}
                            </div>
                            </div>
                            );
                        }
                    })}
                    <CommentForm/>
                    {
                        comments.map((comment) => {
                            if(comment.post_id == post_id) {
                                return (
                                    <Comment name={comment.name} body={comment.body}/>
                                );
                            }
                        })
                    }
            </section>
        </Template>
    );
}