import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import Navbar from "../Components/Navbar";
import HomePage from "../Components/HomePage";
import Footer from "../Components/Footer";
// import About from "../Components/About";
const About = dynamic(() => import("../Components/About"), { ssr: false });
import Blog from "../Components/Blog";
import Offers from "../Components/Offers";
import Popular from "../Components/Popular";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HomePage />
        <Popular popularData={props.popularData} />
        <Offers offersData={props.offersData} />
        <About />
        <Blog blogData={props.blogData} />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const response1 = await fetch("http://localhost:4000/popular");
  const popularData = await response1.json();
  const response2 = await fetch("http://localhost:4000/offers");
  const offersData = await response2.json();
  const response3 = await fetch("http://localhost:4000/blog");
  const blogData = await response3.json();

  return {
    props: {
      popularData: popularData,
      offersData: offersData,
      blogData: blogData,
    },
  };
}