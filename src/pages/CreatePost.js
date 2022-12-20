const CreatePost = () => {
  return (
    <main class='form-container'>
      <h2>
        <i class='fa-solid fa-square-plus'></i>
        CREATE POST
      </h2>

      <form>
        <div class='input-field-container'>
          <label for='title'>Title</label>
          <input type='text' name='title' id='title' />
        </div>
        <div class='input-field-container'>
          <label for='body'>Body</label>
          <textarea type='text' rows='10' cols='20'></textarea>
        </div>

        <button type='submit'>CREATE</button>
      </form>
    </main>
  );
};

export default CreatePost;
