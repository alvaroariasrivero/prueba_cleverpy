import {FC, useContext, useEffect, useState}from "react";
import {userContext} from '../../App';
import axios from 'axios';
import Card from '../Card';
import './Home.scss';


interface Data{
  title: string,
  body: string,
  id: number,
  userId: number
}

const Home: FC = () => {

  const appContext = useContext(userContext);

  const[posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const json = res.data;
        const postArray = json.map((item: Data) => {
          return{
            'title': item.title,
            'body': item.body,
            'user': item.userId,
            'id': item.id
          }
        })
        setPosts(postArray)
      } catch (error) {
        console.log('error', error)
      }      
    }
    fetchPost();
  }, [])

  const deletePost = (i: number) => {
    if(appContext?.user){
    const cleanedPosts = posts.filter((post,j)=>j!==i)
    setPosts(cleanedPosts)
    }
  }
  
  const paintCards = () => {
    return posts.map((post, i) => <Card key={i} post={post} delete={()=>deletePost(i)}/>)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return <>
          <div className="card-container">{paintCards()}</div>
          <button onClick={scrollToTop} className="back-to-top">&#129145;</button>
        </>;
};

export default Home;
