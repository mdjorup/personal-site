import { getPageRecordMap } from "@/app/notionUtils";
import { redirect } from "next/navigation";
import { NotionPage } from "../../NotionPage";

export default async function Page({ params }: { params: { slug: string } }) {
    const response = await getPageRecordMap("Project", params.slug);
    if (response == null) {
        redirect("/");
    }
    return <NotionPage recordMap={response} />;
}
