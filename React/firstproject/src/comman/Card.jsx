import React from 'react'

export default function Card({id, title, img, des}) {

    return (
        <>
            <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
                <a href="#">
                    <img
                        className="rounded-t-base w-[100%] h-[250px]"
                        src={img}
                        alt={title}
                    />
                </a>
                <div className="p-6 text-center">

                    <a href="#">
                        <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
                          {title}
                        </h5>
                    </a>

                    <p className='line-clamp-3'>
                      {des}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-cente bg-brand box-border border border-black-500 my-5 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                    >
                        Read more
                        <svg
                            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
