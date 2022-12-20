import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPost, updatePost } from '../actions/postActions';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useLocation();

  const id = params?.search?.split('=')[1];

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const { title, body } = post;

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (id) {
      dispatch(updatePost(post, id, navigate));
    } else {
      dispatch(createPost(post, navigate));
    }
  };

  const getPostById = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost({ ...res.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      getPostById();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <main className='form-container'>
      <h2>
        <i className='fa-solid fa-square-plus'></i>
        {id ? 'UPDATE POST' : 'CREATE POST'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='input-field-container'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className='input-field-container'>
          <label htmlFor='body'>Body</label>
          <textarea
            type='text'
            rows='10'
            cols='20'
            name='body'
            id='body'
            value={body}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>{id ? 'UPDATE' : 'CREATE'}</button>
      </form>
    </main>
  );
};

export default CreatePost;
