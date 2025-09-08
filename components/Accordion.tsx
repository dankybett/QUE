"use client"

import { useState } from "react"

export default function Accordion({ title, children }:{title:string; children:React.ReactNode}){
  const [open, setOpen] = useState(false)
  return (
    <section className="border-b py-3">
      <button
        className="w-full text-left font-medium hover:underline"
        onClick={()=>setOpen(!open)}
        aria-expanded={open}
      >
        {title}
      </button>
      {open && <div className="mt-2 space-y-2">{children}</div>}
    </section>
  )
}
