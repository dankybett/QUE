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
    <div className="border-t border-gray-200 pt-8 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1">
          {prevSection && (
            <Link 
              href={prevSection.path}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Previous: {prevSection.title}
            </Link>
          )}
        </div>
        <div className="flex-1 text-right">
          {nextSection && (
            <Link 
              href={nextSection.path}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Next: {nextSection.title} →
            </Link>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-sm text-gray-500 mb-2">
          Section {currentSection?.id || 1} of {sections.length}
        </div>
        <div className="flex justify-center space-x-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.path}
              className={`w-3 h-3 rounded-full transition-colors ${
                section.path === pathname 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              title={section.title}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/workbook"
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Overview
        </Link>
      </div>
    </div>
  )
}