import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { SlDislike, SlLike } from 'react-icons/sl'
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

export default function Card({ title, des, view, id }) {

    const [vote, setvote] = useState([]);

    let handelvote = (voteType) => {

        setvote(voteType);

        axios.post('http://localhost:8000/api/vote/vote', {
            Title: id,
            voteType: voteType
        })
            .then((res) => {
                console.log(res.data.data)
            })
    }

    useEffect(() => {

        const handleVoteUpdate = (data) => {
            if (data.Title === id) {
                console.log('Vote updated:', data);
            }
        };

        socket.on('Voteupdate', handleVoteUpdate);

        return () => {
            socket.off('Voteupdate', handleVoteUpdate);
        };
    }, [id])

    return (
        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-xl shadow-xs overflow-hidden">
            <a href="#">
                <img className="rounded-base" src="https://www.wscubetech.com/blog/wp-content/uploads/2026/10/process-business-analytics.webp" alt="Image" />
            </a>

            <Link href={`/blog-details/${id}`}>
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading p-3">
                    {title}
                </h5>
            </Link>
            <p className="mb-6 text-body p-3 line-clamp-3 overflow-hidden">
                {des}
            </p>

            <span className="p-3 text-gray-500 flex gap-5">
                <button
                    className={`cursor-pointer ${vote === 'Likes' ? 'text-red-500' : 'text-gray-500'}`}
                    onClick={() => handelvote('Likes')}
                >
                    <SlLike />
                </button>

                <button
                    className={`cursor-pointer ${vote === 'Dislikes' ? 'text-red-500' : 'text-gray-500'}`}
                    onClick={() => handelvote('Dislikes')}
                >
                    <SlDislike />
                </button>
            </span>



        </div>

    )
}
