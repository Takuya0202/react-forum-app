import './App.css'
import Header from './components/Header';
import getPosts from './api/GetPosts';
import PostCard from './components/PostCard';
import Footer from './components/Footer';
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
      <p className='mb-3'>直近10件のスレッド一覧</p>
      <PostCard posts={posts} />
      <Footer />
    </div>
  );
}