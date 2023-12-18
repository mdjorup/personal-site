import { format } from "date-fns"; // Importing format function from date-fns for date formatting
import Link from "next/link";
import { getBlogPostPages } from "./notionUtils";

export interface IBlogPost {
    id: string;
    date: string | Date;
    title?: string;
    headline?: string;
    slug?: string;
}

const BlogPostItem = ({ id, title, date, headline, slug }: IBlogPost) => {
    const formattedDate = format(new Date(date), "MMMM d, yyyy");

    return (
        <div className="border-b border-gray-200 py-3">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="text-sm text-gray-600 mt-1">
                <time dateTime={date.toString()}>{formattedDate}</time>{" "}
                {/* Displaying the formatted date */}
            </div>
            <p className="text-sm text-gray-600 mt-1">{headline}</p>
            {slug && (
                <Link
                    href={`/blog/${slug}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-sm mt-2 inline-block"
                >
                    Read more →
                </Link>
            )}
        </div>
    );
};

const BlogLinks = async () => {
    const blogPosts = await getBlogPostPages();

    return (
        <div className="bg-white p-6 m-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Thoughts</h2>
            <div className="divide-y divide-gray-200">
                {blogPosts.map((blogPost, index) => (
                    <BlogPostItem key={blogPost.id} {...blogPost} />
                ))}
            </div>
        </div>
    );
};

export default BlogLinks;
