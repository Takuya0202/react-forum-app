import React from 'react'

const ReplyCard = ({posts}) => {
  return (
    <div>
      <p className='m-3'>{posts.length == 0 && '書き込みはありません'}</p>
      {
        posts.map((post,idx) => (
          <div key={post.id} className='flex items-center space-x-5 bg-white shadow-md my-2 p-2'>
            <p>ID : {idx + 1}</p>
            <p>{post.post}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ReplyCard
