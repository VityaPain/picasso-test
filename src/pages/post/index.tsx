import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../shared/button/ui";
import Spinner from "../../shared/spinner/ui";
import { useGetPostByIdQuery } from "../../entities/post/service";

function PostPage() {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetPostByIdQuery(id);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  if (isLoading) return <div className="container"><Spinner /></div>;
  if (!isSuccess) return <h1>Попробуйте перезагрузить страницу</h1>;

  return (
    <div className="container">
        <div className="post">
            <h3># {data.id}</h3>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
        <Button label="Вернуться" onClick={clickHandler}/>
    </div>
  );
}

export default PostPage;