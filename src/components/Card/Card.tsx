import * as React from "react";

export type CardProps = {
  post: {body:string, title: string, id: number, user: number},
  delete: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Card: React.FC<CardProps> = (Props: CardProps) => {
  return <div className="card">
    <h3>Title: {Props.post.title}</h3>
    <h4>Author: {Props.post.user}</h4>
    <p>{Props.post.body}</p>
    <p>{Props.post.id}</p>
    <button onClick={Props.delete}>Delete Post</button>
  </div>;
};

export default Card;
