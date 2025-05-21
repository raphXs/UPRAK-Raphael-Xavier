import React, { useEffect, useState } from 'react';
import image1 from '../assets/gambar 1.png';
import image2 from '../assets/gambar 2.png';
import image3 from '../assets/gambar 3.png';
import image4 from '../assets/gambar 4.png';
import image5 from '../assets/gambar 5.png';
import image6 from '../assets/gambar 6.png';

const images = [image1, image2, image3, image4, image5, image6];

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 6))) 
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Update</h1>
          <p className="text-lg text-gray-600">
            Apa yang baru di Petani Kode? 🔥<br />
            Baca artikel terbaru yang masih fresh dan hangat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow border overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={images[index]}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
