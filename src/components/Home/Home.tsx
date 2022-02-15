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

  console.log('Esto es posts', posts)

  const paintCards = () => {
    return posts.map((post, i) => /*console.log('Esto trae el map', post)*/<Card key={i} post={post}/>)
  }
  
  return <div>{paintCards()}</div>;
};

export default Home;
