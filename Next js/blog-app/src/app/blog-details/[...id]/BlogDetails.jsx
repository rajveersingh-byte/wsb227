'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function BlogDetails() {

    const {id}  = useParams();

    const [single, setsingle] = useState('');

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then((res) => {
                setsingle(res.data)
            })
    }, [])

    return (
        <div className='max-w-[1200px] mx-auto my-5 py-5'>
            <div className='flex justify-between'>
                <div className='lg:w-[50%]'>
                    <img src="https://www.wscubetech.com/blog/wp-content/uploads/2026/10/process-business-analytics.webp" alt="Image" />
                </div>

                <div className='lg:w-[50%] p-5 text-base/9'>
                    <h1 className='text-2xl font-bold'>{single.title}</h1>

                    <p className='break-all'>Tags :{single.tags}</p>

                    <p>{single.body}</p>

                    <span>views : {single.views}</span>
                </div>
            </div>
        </div>
    )
}
