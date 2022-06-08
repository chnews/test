import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const post = ({post}) => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-8'> 
                <h1>{post.title}</h1>
                <Image src="/SL1.jpg" width='800' height='450'/>
                <p>{post.body}</p>
            </div>
        </div>
    </div>
        
    
    </>
  )
}


export const getServerSideProps = async (ctx) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);
    const post = await res.json();



    return {
        props: {
            post
        }
    }
}

export default post