import Header from "../components/Header";
import Footer from "../components/Footer";
import CancelButton from "../components/CancelButton";
import { useState } from "react";
import PostPosts from "../api/PostPosts";
export default function Create(){
  const [title,setTitle] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault()
    await PostPosts({title})
  }
  return(
    <>
      <Header />
      <h1>スレッドの新規作成</h1>
      <div>
        <form  method="post" onSubmit={handleSubmit}>
          <label >スレッドタイトルを設定</label><br />
          <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}
          className="p-4 border-2 border-black" placeholder="タイトル"/><br />
          <button type="submit">投稿する</button>
        </form>
        <CancelButton />
      </div>
      <Footer></Footer>
    </>
  );
}