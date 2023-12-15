import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const notionAPI = new NotionAPI();

export const getPageRecordMap = async (projectSlug: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Page Type",
                    select: {
                        equals: "Project",
                    },
                },
                {
                    property: "Slug",
                    rich_text: {
                        equals: projectSlug,
                    },
                },
            ],
        },
    });

    const page = response.results[0];

    if (page == null) {
        return undefined;
    }

    const pageId = page.id;

    const recordMap = await notionAPI.getPage(pageId);

    return recordMap;
};
