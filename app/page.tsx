import BlogLinks from "./BlogLinks";
import Companies from "./Companies";
import GithubProjects from "./GithubProjects";
import PersonalInfo from "./PersonalInfo";

export const revalidate = 60 * 5;

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
            <div>
                <PersonalInfo />
            </div>
            <div>
                <Companies /> 
                <GithubProjects />
                <BlogLinks />
            </div>
        </div>
    );
}
