import Header from '../components/common/Header';
import GetThreads from '../api/GetThreads';
import PostCard from '../components/PostCard';
import Footer from '../components/common/Footer';
import { useEffect, useState } from 'react';
export default function Home(){
  // スレッド一覧を取得
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await GetThreads();
      console.log(data);
      setPosts(data);
    }
    fetchPosts();
  },[])


  return(
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>
        <h2 className='m-3 text-xl font-semibold'>直近10件のスレッド一覧</h2>
        <PostCard posts={posts} />
      </main>
      <Footer />
    </div>
  );
}