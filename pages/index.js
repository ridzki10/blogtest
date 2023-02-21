import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Template from '../layout/Template';
import Banner from '../components/Banner';
import Posts from '../components/Posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    // <h1 className="text-3xl font-bold underline text-indigo-500">
    //   Hello world!
    // </h1>
      <Template>
        <Banner></Banner>
        <Posts></Posts>
        <h1>Main Content</h1>
      </Template>
  );
}
