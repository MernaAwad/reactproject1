import React, { useState } from 'react';

const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UnCategorized');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [imgError, setImgError] = useState('');

  const POST_CATEGORIES = ['Agriculture', 'Business', 'Art', 'History'];

  const validateInputs = () => {
    let isValid = true;

    if (title.trim() === '') {
      setTitleError('Title is required');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (category === 'UnCategorized') {
      setCategoryError('Please select a category');
      isValid = false;
    } else {
      setCategoryError('');
    }

    if (description.trim() === '') {
      setDescriptionError('Description is required');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    // You may add additional validation for the file input (img) if needed

    return isValid;
  };

  const handleCreatePost = () => {
    if (validateInputs()) {
      // Perform your create post logic here
      console.log('Post created successfully');
    }
  };

  return (
    <section className="create_post">
      <div className="container mb-3">
        <h2>Create Post</h2>
      </div>

      <form className="form create-post__form">
        <input
          type="text"
          name="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`mb-5 rounded-md ${titleError && 'border-red-500'}`}
          autoFocus
        />
        {titleError && <p className="text-red-500">{titleError}</p>}

        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`mb-5 rounded-md ${categoryError && 'border-red-500'}`}
        >
          <option value="UnCategorized">Select Category</option>
          {POST_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {categoryError && <p className="text-red-500">{categoryError}</p>}

        <textarea
          name="description"
          className={`mb-5 rounded-md ${descriptionError && 'border-red-500'}`}
          value={description}
          rows="4"
          cols="50"
          placeholder="Description for post"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {descriptionError && <p className="text-red-500">{descriptionError}</p>}

        <input
          type="file"
          onChange={(e) => setImg(e.target.value)}
          accept="png, jpg, jpeg"
          className={`mb-5 ${imgError && 'border-red-500'}`}
        />
        {imgError && <p className="text-red-500">{imgError}</p>}

        <button
          type="button"
          onClick={handleCreatePost}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
        >
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePosts;
