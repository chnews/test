import React from 'react'
import Posts from '../../components/Posts'

const allPost = ({posts}) => {
  return (
    <>
    <Posts posts={posts}/>
    
    </>
  )
}



export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const posts = await res.json();



  return {
    props: {
      posts: posts
    }
  }

  
}

export default allPost
