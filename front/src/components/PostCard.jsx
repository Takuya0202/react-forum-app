import { Link } from "react-router-dom";

export default function PostCard({posts}){
  return(
    <>
      {
        posts.map((post) => (
        <div key={post.id} className="p-4 border-2 border-black shadow-md bg-slate-50 rounded-md m-3">
          <Link to={`/threads/${post.id}`} state={{threadId : post.id , title : post.title}}>
            <h2 className="text-center text-blue-700">{post.title}</h2>
          </Link>
        </div>
        ))
      }
    </>
  )
}