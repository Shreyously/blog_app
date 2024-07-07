import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const formatDate = (date : Date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const today = formatDate(new Date());

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorname={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={today}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
