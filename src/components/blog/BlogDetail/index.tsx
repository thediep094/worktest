import React from "react";
import ContentLayout, { IContentLayout } from "../ContentLayout";
import styles from "./blogdetail.module.css";
export interface IAuthor {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICard {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}
export interface IFeature {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}
export interface ISizes {
  card: ICard;
  feature: IFeature;
}
export interface IFeaturedImage {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  sizes: ISizes;
  alt: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
}
export interface Subtitle {
  children: {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }[];
  type: string;
}

export interface ITag {
  id: string;
  name: string;
}

export interface IBlogDetail {
  id: string;
  title: string;
  author: IAuthor;
  publishedDate: string;
  tags: ITag[];
  layout: IContentLayout[];
  createdAt: string;
  featuredImage: IFeaturedImage;
}

const BlogDetail: React.FC<IBlogDetail> = (props) => {
  const { author, layout, featuredImage, publishedDate, tags, title } = props;

  const listTags = tags.map((tag) => `#${tag.name}`);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {featuredImage && (
          <img
            src={featuredImage.sizes.feature.url}
            className={styles.featuredImage}
          />
        )}
        <div className={styles.headerContent}>
          <h2 className={styles.author}>{author.name}</h2>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div className={styles.content}>
        {layout.map((data, index) => (
          <ContentLayout {...data} key={index} />
        ))}
        <hr />
        <div className={styles.tags}>{listTags.join(", ")}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
