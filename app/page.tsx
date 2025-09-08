import Link from 'next/link'

export default function Page(){
  return (
    <div className="space-y-6">
      <p>Explore the sections below with your mental health worker. Each section includes plain-language explanations, reflections, and short practices.</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><Link className="text-blue-600 underline" href="/workbook">Open the full workbook</Link></li>
      </ol>
    </div>
  )
}
