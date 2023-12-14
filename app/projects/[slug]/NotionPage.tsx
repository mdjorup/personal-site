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

import { redirect } from "next/navigation";

interface NotionPageProps {
    recordMap: ExtendedRecordMap;
}

export const NotionPage = ({ recordMap }: NotionPageProps) => {
    if (!recordMap) {
        redirect("/");
    }

    return (
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
    );
};
