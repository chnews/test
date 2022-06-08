import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Posts = ({posts}) => {
  return (
    <>
     <div className='container'>
         <div className='row mt-5'>
             <div className='col-3'></div>
             <div className='col-6 text-center'>
             {posts && posts.map((post) => 
                    <div key={post.id}>
                    <Image src="/SL1.jpg" width='800' height='450'/>
                    <Link href="posts/[id]" as={`posts/${post.id}`}>
                        <a>
                            <h3>{post.title}</h3>
                        </a>
                    </Link>
                    <p>{post.body}</p>
                    <hr/>
                    </div>
                )}
              
             </div>
             
             <div className='col-3'></div>
         </div>
       
     
     </div>
    </>
  )
}

export default Posts