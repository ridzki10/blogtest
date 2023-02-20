import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Template from '../layout/Template';
import Banner from '../components/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    // <h1 className="text-3xl font-bold underline text-indigo-500">
    //   Hello world!
    // </h1>
      <Template>
        <Banner></Banner>
        <h1>Main Content</h1>
      </Template>
  );
}
