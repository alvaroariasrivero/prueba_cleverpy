import * as React from "react";

export type CardProps = {
  post: {body:string, title: string, id: number, user: number}
};

const Card: React.FC<CardProps> = (post) => {
  return <div className="card">
    <p>Title: {post.post.title}</p>
    <p>Author: {post.post.user}</p>
    <p>{post.post.body}</p>
    <p>{post.post.id}</p>
  </div>;
};

export default Card;
