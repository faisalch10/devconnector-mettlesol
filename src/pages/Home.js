import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, deletePost } from '../actions/postActions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.posts);

  const triggerDeletePostActionCreator = id => dispatch(deletePost(id));

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container-wrapper'>
      <div className='home-container'>
        <div className='top-content'>
          <h1>All Posts</h1>
          <Link to='/create-post'>
            <i className='fa-solid fa-square-plus'></i> CREATE POST{' '}
          </Link>
        </div>

        <div className='main-content'>
          {posts.map(post => (
            <div className='item' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className='post-icon'>
                <Link to='#'>
                  <i className='fa-solid fa-book-open'></i> Read More
                </Link>
              </div>

              <div className='post-actions'>
                <i
                  className='fa-solid fa-pen-to-square'
                  onClick={() => navigate(`/create-post?id=${post.id}`)}
                ></i>
                <i
                  className='fa-solid fa-trash'
                  onClick={() => triggerDeletePostActionCreator(post.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
