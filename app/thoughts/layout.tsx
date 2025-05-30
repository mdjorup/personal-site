import Link from "next/link"

const ThoughtsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="relative">
      <Link href={"/"} className="fixed top-4 left-4 p-2 rounded-xl font-bold">
        Back to Main Page
      </Link>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default ThoughtsLayout