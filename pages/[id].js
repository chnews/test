import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react'

const singlePost = ({posts}) => {
  return (
    <>
      {
        JSON.stringify(posts)
      }
    </>
  )
}



export const getServerSideProps = async ({query}) => {
  const p = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
  const allPosts = await p.json();



  return {
    props: {
      posts: allPosts || null
    }
  }
}

export default singlePost
