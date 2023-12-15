import { getPageRecordMap } from "@/app/notionUtils";
import { NotionPage } from "../../NotionPage";

export default async function Page({ params }: { params: { slug: string } }) {
    const response = await getPageRecordMap("Project", params.slug);
    return <NotionPage recordMap={response} />;
}
