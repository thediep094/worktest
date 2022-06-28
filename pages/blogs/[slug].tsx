import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import BlogDetail, { IBlogDetail } from "src/components/blog/BlogDetail";

export interface IBlogDetailPage {
  data: IBlogDetail;
}

const BlogDetailPage: React.FC<IBlogDetailPage> = (props) => {
  const {
    author,
    createdAt,
    featuredImage,
    id,
    publishedDate,
    tags,
    title,
    layout,
  } = props.data;

  return (
    <div>
      <BlogDetail
        id={id}
        key={id}
        author={author}
        layout={layout}
        featuredImage={featuredImage}
        publishedDate={publishedDate}
        tags={tags}
        title={title}
        createdAt={createdAt}
      />
    </div>
  );
};

export default BlogDetailPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;

  const blogReq = await fetch(
    `${process.env.NEXT_PUBLIC_CMS}/api/posts?where[slug][equals]=${slug}`
  );
  const blogData = await blogReq.json();

  return {
    props: {
      data: blogData.docs[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogReq = await fetch(
    `${process.env.NEXT_PUBLIC_CMS}/api/posts?limit=100`
  );

  const blogData = await blogReq.json();

  return {
    paths: blogData.docs.map(({ slug }: { slug: string }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
