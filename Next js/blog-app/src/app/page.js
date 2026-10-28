'use client'

import Card from "./Comman/Card";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {

  const [Blog, SetBlog] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:8000/api/post/postview')
      .then((res) => {
        SetBlog(res.data._data);
      })
  }, [])



  return (
    <>
      <div className="max-w-[1300px] mx-auto border border-1 p-5">
        <h1 className="py-3 text-4xl font-bold">Latest Articles</h1>
        <p>Read our latest blogs on Digital Marketing, Web Development, Data, App Development, Cyber Security, and the latest tech and marketing trends.</p>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-5">

          {
            Blog.length > 0 ?

              Blog.map((v, i) => (
                <Card key={i} title={v.PostTitle} des={v.PostDescription} id={v._id} view={v.views} />
              ))


              :

              (
                <p>No Post Found</p>
              )

          }


        </div>
      </div>
    </>
  );
}
