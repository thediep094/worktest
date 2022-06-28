import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import BlogHome from "src/components/blog/BlogHome";
import BlogHomeSwiper from "src/components/blog/BlogHomeSwiper";

const Home: NextPage = () => {
  return (
    <div>
      <BlogHome />
      <BlogHomeSwiper />
    </div>
  );
};

export default Home;
