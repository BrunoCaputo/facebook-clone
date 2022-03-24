import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { Post } from "../Post";

export function Posts() {
  const col = collection(db, "posts");
  const q = query(col, orderBy("timestamp", "desc"));
  const [realtimePosts] = useCollection(q);

  return (
    <div>
      {realtimePosts?.docs.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
          />
        );
      })}
    </div>
  );
}
