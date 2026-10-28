import axios from 'axios';
import BlogDetails from './BlogDetails';


export async function generateMetadata({params}) {

    let PostId = await params;

    let Id = PostId.id[0];
    
    const fetchApi = await fetch(`https://dummyjson.com/posts/${Id}`);

    const res = await fetchApi.json();

    return{
        title : res.title,
        description : res.body,
        authors : 'WsCube Tech'
    }

}

export default function page() {

  return (
    <BlogDetails />
  )
}
