import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';

type HomeProps = {

};

interface Data{
  title: string,
  body: string,
  id: number,
  userId: number
}


const Home: React.FC<HomeProps> = () => {

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
    const cleanedPosts = posts.filter((post,j)=>j!==i)
    setPosts(cleanedPosts);
  }

  const paintCards = () => {
    return posts.map((post, i) => /*console.log('Esto trae el map', post)*/<Card key={i} post={post} delete={()=>deletePost(i)}/>)
  }
  
  return <div>{paintCards()}</div>;
};

export default Home;
