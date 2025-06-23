import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetPost from '../api/GetPost';
import PostCard from '../components/PostCard';
import ReplyCard from '../components/ReplyCard';
import { useLocation } from 'react-router-dom';

const Show = () => {
  // 画面遷移時に受け取る
  const location = useLocation();
  const {title , threadId } = location.state;
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await GetPost({threadId});
      // console.log(`dataの中身：${data}`);
      setPosts(data);
      // console.log(`postsの中身：${posts}`)
    }
    fetchPosts();
  },[])

  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        <p>{threadId}</p>
        <ReplyCard posts={posts} />
      </main>
      <Footer />
    </div>
  )
}

export default Show
