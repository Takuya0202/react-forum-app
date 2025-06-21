import './App.css'
import Header from './components/Header';
import getPosts from './api/GetPosts';
import PostCard from './components/PostCard';
import { useEffect, useState } from 'react';
export default function home(){
  // スレッド一覧を取得
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    }
    fetchPosts();
  },[])


  return(
    <div className='bg-slate-100'>
      <Header />
      <p>スレッド中身</p>
      <PostCard posts={posts} />
    </div>
  );
}