import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-4xl sm:text-5xl font-bold tracking-tight pt-16 mb-6 scroll-mt-24"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-3xl font-semibold mt-12 mb-4 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-2xl font-mediummt-10 mb-3 scroll-mt-16"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="text-lg font-medium mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-base  leading-relaxed my-4"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal pl-6 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc pl-6 space-y-2"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="leading-snug" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold" {...props} />
  ),
  // a: ({ href, children, ...props }: AnchorProps) => {
  //   const base = `underline underline-offset-2 transition-colors duration-150`;
  //   const className = `text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ${base}`;

  //   if (href?.startsWith('/')) {
  //     return (
  //       <Link href={href} className={className} {...props}>
  //         {children}
  //       </Link>
  //     );
  //   }
  //   if (href?.startsWith('#')) {
  //     return (
  //       <a href={href} className={className} {...props}>
  //         {children}
  //       </a>
  //     );
  //   }
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className={className}
  //       {...props}
  //     >
  //       {children}
  //     </a>
  //   );
  // },
  // code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
  //   const codeHTML = highlight(children as string);
  //   return (
  //     <code
  //       className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono"
  //       dangerouslySetInnerHTML={{ __html: codeHTML }}
  //       {...props}
  //     />
  //   );
  // },
  // Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
  //   <div className="overflow-x-auto my-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
  //     <table className="min-w-full text-sm text-left table-auto">
  //       <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
  //         <tr>
  //           {data.headers.map((header, index) => (
  //             <th key={index} className="px-4 py-3 font-semibold whitespace-nowrap">
  //               {header}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
  //         {data.rows.map((row, index) => (
  //           <tr key={index}>
  //             {row.map((cell, cellIndex) => (
  //               <td key={cellIndex} className="px-4 py-2 whitespace-nowrap text-zinc-700 dark:text-zinc-300">
  //                 {cell}
  //               </td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // ),
  // blockquote: (props: BlockquoteProps) => (
  //   <blockquote
  //     className="border-l-4 pl-5 italic my-6 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600"
  //     {...props}
  //   />
  // ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
