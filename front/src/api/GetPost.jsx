async function GetPost({threadId}) {
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`スレットの取得に失敗しました。ステータス：${res.status}`)
    }
    const data = await res.json();
    // console.log(data['posts']);
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}

export default GetPost;