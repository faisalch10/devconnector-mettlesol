import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main class='container-wrapper'>
      <div class='home-container'>
        <div class='top-content'>
          <h1>All Posts</h1>
          <Link to='/create-post'>
            <i class='fa-solid fa-square-plus'></i> CREATE POST{' '}
          </Link>
        </div>

        <div class='main-content'>
          <div class='item'>
            <h3>Post one</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab molestias quibusdam...
            </p>
            <div class='post-icon'>
              <Link to='#'>
                <i class='fa-solid fa-book-open'></i> Read More
              </Link>
            </div>

            <div class='post-actions'>
              <i class='fa-solid fa-pen-to-square'></i>
              <i class='fa-solid fa-trash'></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
