import classNames from "classnames";
import Link from "next/link";
import { getPagesByEntryType } from "./notionUtils";

export interface IProject {
    id: string;
    title?: string;
    headline?: string;
    githubLink?: string;
    slug?: string;
}

const ProjectItem = ({ id, title, headline, githubLink, slug }: IProject) => {
    return (
        <div className="border-b border-gray-200 pb-3 mb-3">
            <div className="text-lg font-semibold text-gray-800 hover:underline">
                {title}
            </div>
            <p className="text-sm text-gray-600 mt-1">{headline}</p>
            <div>
                <Link
                    href={slug ? `/projects/${slug}?id=${id}` : "#"}
                    as={slug ? `/projects/${slug}` : "#"}
                    className={classNames(
                        "inline-block text-sm font-medium py-1 px-3 rounded mt-2",
                        {
                            "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer":
                                slug,
                            "bg-gray-300 cursor-default pointer-events-none":
                                !slug,
                        }
                    )}
                >
                    Writeup
                </Link>
                <Link
                    href={githubLink ?? "#"}
                    className={classNames(
                        "inline-block text-sm font-medium py-1 px-3 rounded mt-2 ml-3",
                        {
                            "bg-green-600 text-white hover:bg-green-700 cursor-pointer":
                                githubLink,
                            "bg-gray-300 cursor-default pointer-events-none":
                                !githubLink,
                        }
                    )}
                    target="_blank"
                >
                    GitHub
                </Link>
            </div>
        </div>
    );
};

const GithubProjects = async () => {
    const projects = await getPagesByEntryType("Project");

    return (
        <div className="bg-white p-6 m-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                GitHub Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default GithubProjects;
