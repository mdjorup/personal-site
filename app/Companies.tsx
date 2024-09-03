import classNames from "classnames";
import Link from "next/link";
import { getCompaniesPages } from "./notionUtils";

export interface ICompany {
    id: string;
    title?: string;
    date: string | Date;
    headline?: string;
    websiteLink?: string;
    slug?: string;
}

export const CompanyItem = ({ id, title, headline, websiteLink, slug }: ICompany) => {
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
                    href={websiteLink ?? "#"}
                    className={classNames(
                        "inline-block text-sm font-medium py-1 px-3 rounded mt-2 ml-3",
                        {
                            "bg-green-600 text-white hover:bg-green-700 cursor-pointer":
                            websiteLink,
                            "bg-gray-300 cursor-default pointer-events-none":
                                !websiteLink,
                        }
                    )}
                    target="_blank"
                >
                    Website
                </Link>
            </div>
        </div>
    );
};

const Companies = async () => {
    const projects = await getCompaniesPages();

    return (
        <div className="bg-white p-6 m-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Companies and Websites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <CompanyItem key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Companies;
