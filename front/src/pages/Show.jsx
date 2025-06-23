import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import GetPosts from '../api/GetPosts';
import PostCard from '../components/PostCard';
import ReplyCard from '../components/ReplyCard';
import { useLocation, useNavigate } from 'react-router-dom';
import CancelButton from '../components/common/CancelButton';
import Button from '../components/common/Button';
import PostPosts from '../api/PostPosts';

const Show = () => {
  // 画面遷移時に受け取る
  const location = useLocation();
  const {title , threadId } = location.state;
  

  const [posts,setPosts] = useState([]);
  const [reply,setReply] = useState('');

  const fetchPosts = async () => {
    const data = await GetPosts(threadId);
    setPosts(data);
    }
  useEffect(() => {
  fetchPosts();
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (reply.trim() === '') {
      return
    }
    else{
      await PostPosts({threadId,reply});
      setReply('');
      fetchPosts();
    }
  }

  return (
    <div>
      <Header />
      <main>
        <h2 className='text-xl font-semibold m-3'>{title}</h2>
        <ReplyCard posts={posts} />
        <div className='m-3'>
            <form onSubmit={handleSubmit} method="post">
              <input type="text"  value={reply} onChange={(e) => {setReply(e.target.value)}}
              className='block p-4 border-2 border-black rounded-md' placeholder='投稿する'/>
              <div className='flex items-center space-x-5 my-3'>
                <CancelButton />
                <Button type={'submit'} bg={'yellow'} color={'black'}>書き込み</Button>
              </div>
            </form>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Show
