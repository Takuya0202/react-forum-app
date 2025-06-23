const url = 'https://railway.bulletinboard.techtrain.dev/threads'
async function GetThreads() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`スレッドの一覧取得に失敗しました。ステータス：${res.status}`)
    }
    const data = await res.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error.message);
  }
}

export default GetThreads;