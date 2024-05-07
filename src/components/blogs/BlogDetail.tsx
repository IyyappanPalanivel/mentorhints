import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from 'assets/brand/logo.png';
import { getBlogDetailsById } from '../../datas/BlogDatas';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogDetail = (props) => {

    // const {blogData} = props;
    const { id } = useParams();

    const [blogData,setBlogData] = useState();
    const [body,setBody] = useState();
    
    // Split the description into an array of points based on newline character (\n)
    

    useEffect(() => {
        console.log("Id", id)
        const blog = getBlogDetailsById(id);
        setBlogData(blog);
        const points = blog.body.split('\n');
        setBody(points);
    }, [])

    return (
        <div className='px-6 md:px-20 mt-10'>
            {
                blogData && <>
                    <h3 className='text-red-500 text-[12px]'>{blogData.title}</h3>
                    <h3 className='text-[23px] font-bold'>{blogData.title}</h3>
                    <div className='flex items-center mt-5'>
                        <img src={logo}
                            className='w-[35px] rounded-full border' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-[12px]'>Mentorhints</h3>
                            <h3 className='text-gray-500 text-[10px]'>07 May 2024</h3>
                        </div>
                    </div>
                    <img src={blogData.image} className='rounded-2xl mt-5 mb-5 w-full' />
                    {/* Render each point as a separate paragraph */}
                    {body.map((point, index) => (
                        <p key={index} className="text-xs font-poppins font-normal text-gray pb-2">{point}</p>
                    ))}
                </>
            }

            {/* <h3>{post.desc}</h3> */}
            {/* <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown> */}
        </div>
    );
};

export default BlogDetail;