import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const notionAPI = new NotionAPI();

type WriteupType = "Project" | "Blog";

export const getPageRecordMap = async (
    writeupType: WriteupType,
    slug: string
) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Page Type",
                    select: {
                        equals: writeupType,
                    },
                },
                {
                    property: "Slug",
                    rich_text: {
                        equals: slug,
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
