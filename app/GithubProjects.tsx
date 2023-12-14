import Link from "next/link";

interface ProjectProps {
    name: string;
    description: string;
    githubUrl: string;
    writeupId: string;
}

const ProjectItem = ({
    name,
    description,
    githubUrl,
    writeupId,
}: ProjectProps) => {
    return (
        <div className="mb-3">
            <a
                target="_blank"
                href={githubUrl}
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                {name}
            </a>
            <p className="text-gray-600">{description}</p>
            <Link
                href={`/projects/${writeupId}`}
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 mt-2"
            >
                Read More
            </Link>
        </div>
    );
};

const GithubProjects = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                GitHub Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProjectItem
                    name={"GPT-Comment"}
                    description="AI generated college essay commenting bot"
                    githubUrl="https://github.com/mdjorup/gpt-comment"
                    writeupId="sjdklfasjdf"
                />
            </div>
        </div>
    );
};

export default GithubProjects;
