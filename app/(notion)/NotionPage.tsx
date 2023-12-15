// NotionPage.tsx

"use client";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";

import Link from "next/link";
import { redirect } from "next/navigation";

interface NotionPageProps {
    recordMap?: ExtendedRecordMap;
}

export const NotionPage = ({ recordMap }: NotionPageProps) => {
    if (!recordMap) {
        redirect("/");
    }

    return (
        <div>
            <div className="h-20 flex flex-col justify-center border-b border-gray-300">
                <Link
                    href="/"
                    className="ml-8 w-20 flex justify-center whitespace-nowrap text-gray-600 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md py-2 px-4"
                >
                    Home
                </Link>
            </div>
            <NotionRenderer
                recordMap={recordMap}
                components={{
                    Code,
                    Collection,
                    Equation,
                    Modal,
                }}
                fullPage={true}
                darkMode={false}
            />
        </div>
    );
};
