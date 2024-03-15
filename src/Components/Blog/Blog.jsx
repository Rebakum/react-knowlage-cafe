import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  // console.log(blog);
  const {
    id,
    title,
    cover_image,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className=" md:2/3  mb-20">
      <img
        className="w-full h-72 mb-8"
        src={cover_image}
        alt={'cover image of  the title ${title}'}
      />
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-16 rounded-full ">
            <img className="w-full rounded-full" src={author_image} alt="" />
          </div>
          <div className="ml-6">
            <p>
              <span className="text-2xl">{author}</span>
            </p>
            <p>
              <span>{posted_date}</span>
            </p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark className="ml-2 text-2xl text-red-600"></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-4xl">{title}</h3>

      <p className="text-lg">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="mt-5"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        MarkAsRead
      </button>
    </div>
  );
};

Blog.prototype = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};
export default Blog;
