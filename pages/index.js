import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Template from '../layout/Template';
import Banner from '../components/Banner';
import SectionPosts from '../components/SectionPosts';
import SectionCategory from '../components/SectionCategory';
import Paginate from '../components/Paginate';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [posts,setPosts] = useState([]);
  const [users,setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(5);
  
  useEffect(() => {
      const dataFetch = async () => {
          try {
              let urlPosts = `https://gorest.co.in/public/v2/posts?page=${page}&per_page=20`;
              let urlUsers = `https://gorest.co.in/public/v2/users`;
              let responsePosts = await fetch(urlPosts);
              let responseUsers = await fetch(urlUsers);

              if(!responsePosts.ok && !responseUsers.ok) {
                  throw new Error(`Terjadi gangguan: ${response.status}}`);
              }
              //console.log(responsePosts);
              let dataPosts = await responsePosts.json();
              let dataUsers = await responseUsers.json();
              // console.log(dataPosts);
              //console.log(dataUsers);
              setPosts(dataPosts);
              setUsers(dataUsers);
          }
          catch(error) {
              console.log(error);
          }
      }
      dataFetch();
  },[]);

  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(currentPost);

  const handlePreviousClick = () => {
    setPage(page <= 1 ? 1 : page - 1);
  }

  const handleNextClick = () => {
    setPage((Math.ceil(posts.length/postPerPage)) == page ? page : page+1);
  }

  const paginate = (number) => {
    setPage(number);
  }

  // console.log(users);
  // console.log(posts);

  return (
    
    // <h1 className="text-3xl font-bold underline text-indigo-500">
    //   Hello world!
    // </h1>
      <Template>
        <Banner posts={currentPost} users={users}></Banner>
        <SectionCategory posts={currentPost} users={users}/>
        <SectionPosts posts={currentPost} users={users}></SectionPosts>
        <Paginate 
        postPerPage={postPerPage} 
        totalPost={posts.length}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        paginate={paginate}
        />
      </Template>
  );
}
