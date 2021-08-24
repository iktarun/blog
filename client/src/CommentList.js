import React from "react";

const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState({});

  // const fetchComments = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    let content = "";
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is pending";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedComments}
    </div>
  );
};

export default CommentList;
