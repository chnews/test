import React from 'react'




const index = ({articles}) => {
  return (
    <>
    {articles.map((article) => <h2>{article.title}</h2>)}
     
    </>
  )
}


export const getStaticProps = async () => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();



  return {
    props: {
      articles
    }
  }
}



export default index