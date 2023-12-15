import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";
import { IProject } from "./GithubProjects";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const notionAPI = new NotionAPI();

type EntryType = "Project" | "Blog";

export const getPageRecordMap = async (entryType: EntryType, slug: string) => {
    let pageId = "";

    if (entryType === "Project") {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        });

        pageId = response.results[0].id;
    }

    const recordMap = await notionAPI.getPage(pageId);

    return recordMap;
};

export const getPagesByEntryType = async (
    entryType: EntryType
): Promise<IProject[]> => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Entry Type",
            select: {
                equals: entryType,
            },
        },
    });

    const results = response.results;
    if (entryType === "Project") {
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
    } else {
        return [];
    }
};
