import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";
import { IBlogPost } from "./BlogLinks";
import { IProject } from "./GithubProjects";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const notionAPI = new NotionAPI();

type EntryType = "Project" | "Blog";

export const getPageRecordMap = async (entryType: EntryType, slug: string) => {
    let pageId = "";

    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Entry Type",
                    select: {
                        equals: entryType,
                    },
                },
                {
                    property: "Slug",
                    rich_text: {
                        equals: slug,
                    },
                },
                {
                    property: "Status",
                    status: {
                        equals: "Done",
                    },
                },
            ],
        },
    });

    if (response.results.length === 0) {
        return undefined;
    }

    pageId = response.results[0].id;

    const recordMap = await notionAPI.getPage(pageId);

    return recordMap;
};

export const getBlogPostPages = async (): Promise<IBlogPost[]> => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Entry Type",
                    select: {
                        equals: "Blog",
                    },
                },
                {
                    property: "Status",
                    status: {
                        equals: "Done",
                    },
                },
            ],
        },
    });

    const results = response.results;
    const blogPosts = results
        .map((result): IBlogPost | undefined => {
            const details: IBlogPost = {
                id: result.id,
                date: new Date(),
            };

            const properties = (result as PageObjectResponse).properties;
            if (properties == null) {
                return undefined;
            }
            // title
            if (
                properties["Title"].type === "title" &&
                properties["Title"].title[0] != null
            ) {
                details.title = properties["Title"].title[0].plain_text;
            }
            // headline
            if (
                properties["Headline"].type === "rich_text" &&
                properties["Headline"].rich_text[0] != null
            ) {
                details.headline =
                    properties["Headline"].rich_text[0].plain_text;
            }
            // slug
            if (
                properties["Slug"].type === "rich_text" &&
                properties["Slug"].rich_text[0] != null
            ) {
                details.slug = properties["Slug"].rich_text[0].plain_text;
            }
            // date
            if (
                properties["Date"].type === "date" &&
                properties["Date"].date?.start != null
            ) {
                details.date = properties["Date"].date.start;
            }

            return details;
        })
        .filter((project): project is IBlogPost => project !== undefined);
    return blogPosts;
};

export const getProjectPages = async (): Promise<IProject[]> => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Entry Type",
                    select: {
                        equals: "Project",
                    },
                },
                {
                    property: "Status",
                    status: {
                        equals: "Done",
                    },
                },
            ],
        },
    });

    const results = response.results;
    const projects = results
        .map((result): IProject | undefined => {
            const details: IProject = {
                id: result.id,
            };

            const properties = (result as PageObjectResponse).properties;
            if (properties == null) {
                return undefined;
            }
            // title
            if (
                properties["Title"].type === "title" &&
                properties["Title"].title[0] != null
            ) {
                details.title = properties["Title"].title[0].plain_text;
            }
            // headline
            if (
                properties["Headline"].type === "rich_text" &&
                properties["Headline"].rich_text[0] != null
            ) {
                details.headline =
                    properties["Headline"].rich_text[0].plain_text;
            }
            // github link
            if (
                properties["Github Link"].type === "url" &&
                properties["Github Link"].url != null
            ) {
                details.githubLink = properties["Github Link"].url;
            }
            // slug
            if (
                properties["Slug"].type === "rich_text" &&
                properties["Slug"].rich_text[0] != null
            ) {
                details.slug = properties["Slug"].rich_text[0].plain_text;
            }

            return details;
        })
        .filter((project): project is IProject => project !== undefined);

    return projects;
};
