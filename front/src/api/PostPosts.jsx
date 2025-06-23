const url = 'https://railway.bulletinboard.techtrain.dev/threads';
async function PostPosts({title}) {
  // 空文字なら許可しない
  if (title.trim() === '') {
    console.log('タイトルが未入力です。')
    return
  }
  try {
    const res = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
        },
      body : JSON.stringify({'title' : title})
    })
    if (!res.ok) {
        throw new Error(`スレッドの作成に失敗しました。ステータス：${res.status}`)
    }
    console.log('スレッドの作成に成功しました。')
  } catch (error) {
    console.log(error)
  }
}

export default PostPosts;