async function PostPost({threadId , reply}) {
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
  try {
    const res = await fetch(url,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({'post' : reply})
    });
    if (!res.ok) {
        throw new Error(`スレッドの作成に失敗しました。ステータス：${res.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export default PostPost;