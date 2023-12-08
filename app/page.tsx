import BlogLinks from "./BlogLinks";
import GithubProjects from "./GithubProjects";
import PersonalInfo from "./PersonalInfo";

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
            <div>
                <PersonalInfo />
            </div>
            <div>
                <GithubProjects />
                <BlogLinks />
            </div>
        </div>
    );
}
