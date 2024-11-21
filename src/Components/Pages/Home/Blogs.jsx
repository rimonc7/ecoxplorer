import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-12">Blogs and News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-20 ">
                {
                    blogs.map((blog, index) => (
                        <div data-aos="zoom-in" key={index} className="card bg-base-100 shadow-xl hover:scale-105">
                            <figure>
                                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                            </figure>
                            <div className="card-body p-5">
                                <div className=" w-fit bg-green-500 p-2 rounded-badge text-white font-bold ">{blog.publishedDate}</div>
                                <p className="text-sm text-gray-500 mt-2 font-bold">
                                By {blog.author}
                                </p>
                                <h2 className="card-title mt-2 text-lg font-semibold">{blog.title}</h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {blog.shortDescription}
                                </p>
                                <div className="card-actions justify-end mt-3">
                                    <a href="#" className="text-green-400 font-semibold hover:underline">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;