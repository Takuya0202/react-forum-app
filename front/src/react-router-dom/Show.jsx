import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetPost from '../api/GetPost';
import PostCard from '../components/PostCard';
import ReplyCard from '../components/ReplyCard';
import { useLocation, useNavigate } from 'react-router-dom';
import CancelButton from '../components/CancelButton';
import Button from '../components/Button';
import PostPost from '../api/PostPost';

const Show = () => {
  // 画面遷移時に受け取る
  const location = useLocation();
  const {title , threadId } = location.state;
  const nav = useNavigate();

  const [posts,setPosts] = useState([]);
  const [reply,setReply] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await GetPost({threadId});
      // console.log(`dataの中身：${data}`);
      setPosts(data);
      // console.log(`postsの中身：${posts}`)
    }
    fetchPosts();
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (reply.trim() === '') {
      return
    }
    else{
      await PostPost({threadId,reply});
      nav('/');
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
