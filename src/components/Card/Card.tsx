import {FC, useContext} from "react";
import {userContext} from '../../App';
import './Card.scss';

export type CardProps = {
  post: {body:string, title: string, id: number, user: number},
  delete: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const Card: FC<CardProps> = (Props: CardProps) => {

  const appContext = useContext(userContext);

  if(appContext?.logged === true){
      return <div className="card">
        <h3>Title: {Props.post.title}</h3>
        <h4>Author: {Props.post.user}</h4>
        <p className="card-txt">{Props.post.body}</p>
        <p><b>ID:</b> {Props.post.id}</p>
        <button onClick={Props.delete} className="delete-btn">Delete Post</button>
      </div>
  } else {
    return <div className="card">
            <h3>Title: {Props.post.title}</h3>
            <h4>Author: {Props.post.user}</h4>
            <p className="card-txt">{Props.post.body}</p>
            <p><b>ID:</b> {Props.post.id}</p>
          </div>
  };
};

export default Card;
