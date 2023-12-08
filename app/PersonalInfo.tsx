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
            <p className="text-gray-600">Location: Charlottesville, VA, USA</p>
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
                    This is a short bio about yourself...
                </p>
            </div>
        </div>
    );
};

export default PersonalInfo;
