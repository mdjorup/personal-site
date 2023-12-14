import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { NotionPage } from "./NotionPage";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const notionAPI = new NotionAPI();

const getPageRecordMap = async (projectSlug: string) => {
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

    const pageId = response.results[0].id;

    const recordMap = await notionAPI.getPage(pageId);

    return recordMap;
};

export default async function Page({ params }: { params: { slug: string } }) {
    const response = await getPageRecordMap(params.slug);
    return <NotionPage recordMap={response} />;
}
