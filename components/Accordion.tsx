"use client"

import { useState } from "react"

export default function Accordion({ title, children }:{title:string; children:React.ReactNode}){
  const [open, setOpen] = useState(false)
  return (
    <section className="border border-gray-200 rounded-lg my-4 overflow-hidden">
      <button
        className={`w-full text-left p-4 font-medium transition-colors flex items-center justify-between gap-3 ${
          open 
            ? 'bg-blue-50 text-blue-900' 
            : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
        }`}
        onClick={()=>setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex-1">{title}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="space-y-2 text-gray-700">
            {children}
          </div>
        </div>
      )}
    </section>
  )
}
