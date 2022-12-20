import axios from 'axios';

export const getAllPosts = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://localhost:5000/posts');
      dispatch({
        type: 'GET_POSTS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createPost = (data, navigate) => {
  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/posts', data);
      dispatch({
        type: 'CREATE_POST',
        payload: res.data,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePost = id => {
  return async dispatch => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);

      dispatch({
        type: 'DELETE_POST',
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePost = (data, id, navigate) => {
  return async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5000/posts/${id}`, data);

      dispatch({
        type: 'UPDATE_POST',
        payload: res.data,
      });

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
};
