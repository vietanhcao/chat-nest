import { CContainer } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import postsApi from 'src/api/postsApi';
import { useAppDispatch } from '../../../app/hooks';
// import { postAuthLogin } from '../../authSlice';
import './style.scss';

export interface PostsPageProps {}

function PostsPage(props: PostsPageProps) {
  const [posts, setPosts] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const history = useHistory();
  // console.log(errors);
  const getAllposts = async () => {
    const posts = await postsApi.getPosts(0);
    setPosts(posts.data);
  };
  const getDataComments = async (id: string) => {
    const comments = await postsApi.getComments(id);
    const postWithComments = posts.map((post) => {
      if (post._id === id) {
        post.comments = comments.data;
      }
      return post;
    });
    setPosts(postWithComments);
  };
  useEffect(() => {
    getAllposts();
  }, []);

  console.log(posts);
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div>
          {posts.map((o, index) => {
            return (
              <div key={o._id} style={{ padding: 10, background: 'cyan', marginBottom: '10px' }}>
                <p>{o.author?.email}</p>
                <p>{o.content}</p>
                <button onClick={() => getDataComments(o._id)}>show comment</button>
                <div style={{ background: 'yellow' }}>
                  {o.comments?.map((c: any) => {
                    return <div key={c._id}>{c.content}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CContainer>
    </div>
  );
}

export default PostsPage;
