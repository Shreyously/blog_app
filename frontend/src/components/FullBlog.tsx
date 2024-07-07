import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const DeleteIcon = () => (
  <svg
    fill="#000000"
    height="30px"
    width="30px"
    viewBox="0 0 51.123 51.123"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M45.123,0H6C2.691,0,0,2.691,0,6v39.123c0,3.309,2.691,6,6,6h39.123c3.309,0,6-2.691,6-6V6C51.123,2.691,48.431,0,45.123,0z M49.123,45.123c0,2.206-1.794,4-4,4H6c-2.206,0-4-1.794-4-4V6c0-2.206,1.794-4,4-4h39.123c2.206,0,4,1.794,4,4V45.123z M36.791,15.746l-9.815,9.815l9.815,9.815c0.391,0.391,0.391,1.023,0,1.414c-0.195,0.195-0.451,0.293-0.707,0.293 s-0.512-0.098-0.707-0.293l-9.815-9.815l-9.815,9.815c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293 c-0.391-0.391-0.391-1.023,0-1.414l9.815-9.815l-9.815-9.815c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l9.815,9.815 l9.815-9.815c0.391-0.391,1.023-0.391,1.414,0S37.181,15.355,36.791,15.746z"/>
  </svg>
);

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  const deleteBlog = async (blogId: string) => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${blogId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        // Blog post has been deleted successfully.
        // Navigate the user back to the list of all posts.
        navigate("/blogs");
      } else {
        // There was an error while deleting the blog post.
        alert("Error while deleting the blog post.");
      }
    } catch (e) {
      // There was an error while making the request to the backend.
      console.error("Error:", e);
      alert("Error while deleting the blog post.");
    }
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 pt-20 max-w-screen-xl ">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-3">Posted on 23rd June 2023</div>
            <div className="">{blog.content}</div>
            <div className="flex gap-2">
              <button
                onClick={() => deleteBlog(blog.id)}
                className="focus:outline-none mt-4"
              >
                <DeleteIcon />
              </button>
              <div className="flex justify-center items-center mt-4">
                <div className="text-slate-800 text-xl font-bold">
                  Click this to delete
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>

            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size={"small"} name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
