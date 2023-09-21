import React from "react";
import { Link } from "../Link";
import { routesEnum } from "../Routes";

export interface PostItem {
  article_id: string;
  category: string;
  content?: any;
  title: string;
  title_image: string;
  created_date: string;
}
export interface PostItems {
  items: Array<PostItem>;
}

export const PostList: React.FC<PostItems> = ({ items }): JSX.Element => {
  if (items.length === 0) {
    return <li>{/* TODO : Empty Post List */}Empty List</li>;
  }

  return (
    <>
      {items.map((post: PostItem) => {
        const date: Date = new Date(Date.parse(post.created_date));
        return (
          <li key={post.article_id}>
            <Link to={routesEnum.newsViewPage + post.article_id}>
              <span className="thumb">
                <img src={post.title_image} alt="" className="img-news" />
              </span>
              <em className="sort">{post.category}</em>
              <p className="txt">{post.title}</p>
              {date && (
                <span className="date">
                  {date.getFullYear()}
                  <span className="md">{`${
                    date.getMonth() + 1
                  }.${date.getDate()}`}</span>{" "}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};
