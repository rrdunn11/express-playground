interface Props {
  id: number;
  content: string;
  created_at: string;
}

function Post({
  content, created_at, id,
}: Props) {
  return (
    <div>
      <span>Post</span>
      <span>{content}</span>
      <span>{created_at}</span>
    </div>
  );
}

export default Post;
