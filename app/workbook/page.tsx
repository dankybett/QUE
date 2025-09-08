'use client'

import Link from 'next/link'

const sections = [
  { id: 1, title: 'Understanding Unsettling Experiences', path: '/workbook/section1', description: 'Introduction & normalization of perceptual experiences' },
  { id: 2, title: 'Why Does This Happen?', path: '/workbook/section2', description: 'How the brain creates perceptual experiences' },
  { id: 3, title: 'When It Becomes Distressing', path: '/workbook/section3', description: 'Understanding what makes experiences difficult' },
  { id: 4, title: 'What Can Help', path: '/workbook/section4', description: 'Strategies for coping and self-regulation' },
  { id: 5, title: 'My Reflections', path: '/workbook/section5', description: 'Personal reflection and closing thoughts' },
]

export default function WorkbookOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Questioning Unsettling Experiences</h1>
      <p className="text-lg text-gray-600 mb-8">
        A guided psycho-education resource to help young people understand and cope with 
        unsettling perceptual experiences.
      </p>
      
      <div className="grid gap-6 md:gap-8">
        {sections.map((section) => (
          <Link 
            key={section.id}
            href={section.path}
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                {section.id}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">How to Use This Workbook</h3>
        <p className="text-gray-700">
          This workbook is designed to be co-navigated with a mental health professional. 
          Each section builds on the previous one, so we recommend working through them in order. 
          Take your time and feel free to revisit sections as needed.
        </p>
      </div>
    </div>
  )
}
