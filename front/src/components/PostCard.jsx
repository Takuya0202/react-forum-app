export default function postCard({posts}){
  return(
    <div>
      {
        posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
        ))
      }
    </div>
  )
}