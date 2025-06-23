import React from 'react'

const ReplyCard = ({posts}) => {
  return (
    <div>
      {
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ReplyCard
