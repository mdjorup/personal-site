import Bio from "./Bio";
import BlogLinks from "./BlogLinks";
import GithubProjects from "./GithubProjects";
import PersonalInfo from "./PersonalInfo";

export default function Home() {
    return (
        <div className="">
            <PersonalInfo />
            <Bio />
            <GithubProjects />
            <BlogLinks />
        </div>
    );
}
