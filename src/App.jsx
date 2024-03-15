import { useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log('bookmark adding soon');
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };
  const handleMarkAsRead = (id, time) => {
    // console.log('marking as read', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove Book mark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-4 mx-auto p-4 max-w-7xl ">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
