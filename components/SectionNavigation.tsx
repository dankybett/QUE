'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Section {
  id: number
  title: string
  path: string
}

const sections: Section[] = [
  { id: 1, title: 'Understanding Unsettling Experiences', path: '/workbook/section1' },
  { id: 2, title: 'Why Does This Happen?', path: '/workbook/section2' },
  { id: 3, title: 'When It Becomes Distressing', path: '/workbook/section3' },
  { id: 4, title: 'What Can Help', path: '/workbook/section4' },
  { id: 5, title: 'My Reflections', path: '/workbook/section5' },
]

export default function SectionNavigation() {
  const pathname = usePathname()
  const currentSection = sections.find(section => section.path === pathname)
  const currentIndex = currentSection ? sections.indexOf(currentSection) : -1
  
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex-1">
          {prevSection && (
            <Link 
              href={prevSection.path}
              className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="truncate">
                <span className="hidden sm:inline">Previous: </span>
                {prevSection.title}
              </span>
            </Link>
          )}
        </div>
        <div className="flex-1 text-left sm:text-right">
          {nextSection && (
            <Link 
              href={nextSection.path}
              className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span className="truncate">
                <span className="hidden sm:inline">Next: </span>
                {nextSection.title}
              </span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-gray-100">
        <div className="text-sm text-gray-500 mb-3">
          Section {currentSection?.id || 1} of {sections.length}
        </div>
        <div className="flex justify-center space-x-3 mb-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.path}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                section.path === pathname 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-blue-400 hover:scale-110'
              }`}
              title={section.title}
            />
          ))}
        </div>
        <Link 
          href="/workbook"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Overview
        </Link>
      </div>
    </div>
  )
}