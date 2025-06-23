import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="bg-black w-full mb-3 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-white m-auto p-4 ml-3">掲示板アプリ</h1>
      </Link>
      <Link to="/threads/new">
        <button type="button" className="text-white mr-3">スレッドの新規作成</button>
      </Link>
    </header>
  );
}