"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectProps {
    name: string;
    description: string;
    githubUrl: string;
    slug?: string;
}

const ProjectItem = ({ name, description, githubUrl, slug }: ProjectProps) => {
    return (
        <div className="border-b border-gray-200 pb-3 mb-3">
            <a
                target="_blank"
                href={githubUrl}
                className="text-lg font-semibold text-gray-800 hover:underline"
            >
                {name}
            </a>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
            <Link
                href={slug ? `/projects/${slug}` : "#"}
                className={classNames(
                    "inline-block text-sm font-medium py-1 px-3 rounded mt-2",
                    {
                        "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer":
                            slug,
                        "bg-gray-300 cursor-default pointer-events-none": !slug,
                    }
                )}
            >
                Writeup
            </Link>
        </div>
    );
};

const GithubProjects = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("/projects.json"); // Adjust the path as necessary
            const projects = await response.json();
            setProjects(projects);
        };

        fetchProjects();
    }, []);

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
