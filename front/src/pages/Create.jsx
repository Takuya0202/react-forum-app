import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CancelButton from "../components/common/CancelButton";
import { useState } from "react";
import PostThreads from "../api/PostThreads";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
export default function Create(){
  const [title,setTitle] = useState('');
  const [msg,setMsg] = useState('スレッドタイトルを設定')
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (title.trim() === '') {
      setMsg('タイトルが未入力です。');
    }
    else{
      await PostThreads(title);
      nav('/');
    }
  }
  return(
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <h2>スレッドの新規作成</h2>
        <form  method="post" onSubmit={handleSubmit} className="w-[60%] my-10 mx-auto">
          <label className="mb-1.5 block" htmlFor="title">{msg}</label>
          <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}
          className="p-4 border-2 border-black w-96" placeholder="タイトル" id="title"/><br />
          <div className="flex items-center justify-end mr-10 space-x-10 my-3">
            <CancelButton />
            <Button type={'submit'} bg={'#1b85fb'}>投稿する</Button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </div>
  );
}