import Header from '../components/Header';
import getPosts from '../api/GetPosts';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
export default function Home(){
  // スレッド一覧を取得
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      console.log(data);
      setPosts(data);
    }
    fetchPosts();
  },[])


  return(
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>
        <p className='mb-3'>直近10件のスレッド一覧</p>
        <PostCard posts={posts} />
      </main>
      <Footer />
    </div>
  );
}