import Link from "next/link";

const PersonalInfo = () => {
    return (
        <div className="bg-white p-6 m-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Michael Djorup
            </h1>
            <p className="text-gray-600">
                Email:{" "}
                <a
                    href="mailto:michael.djorup@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                >
                    michael.djorup@gmail.com
                </a>
            </p>
            <p className="text-gray-600">Location: Arlington, VA, USA</p>
            <div className="mt-4">
                <a
                    href="https://github.com/mdjorup"
                    className="text-blue-600 hover:text-blue-800 mr-4"
                    target="_blank"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/michael-djorup-4016a61ab/"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    About Me
                </h2>
                <p className="text-gray-700">
                    I&apos;m a software engineer building the products I want to see in the world. Recently I was working on a startup called Gruvian, a set of tools for developers to create and run their own ad networks. 
                    Now, I do freelance software development. I&apos;m also working on a a side project <Link href={'https://nflprobabilities.com'} target="_blank">NFLProbabilities.com</Link> with the goal of viewing game probabilities and season simulations in a beautiful format.
                    <br />
                    <br />
                    In addition to coding, I like playing guitar, tennis,
                    pickleball, poker. I also like my dogs and the NFL.
                </p>
            </div>
        </div>
    );
};

export default PersonalInfo;
