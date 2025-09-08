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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Questioning Unsettling Experiences
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A guided psycho-education resource to help young people understand and cope with 
            unsettling perceptual experiences.
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {sections.map((section) => (
            <Link 
              key={section.id}
              href={section.path}
              className="block p-4 sm:p-6 lg:p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-200 transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold shadow-lg">
                  {section.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className="hidden sm:flex items-center text-blue-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 lg:mt-16 p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How to Use This Workbook</h3>
              <p className="text-gray-700 leading-relaxed">
                This workbook is designed to be co-navigated with a mental health professional. 
                Each section builds on the previous one, so we recommend working through them in order. 
                Take your time and feel free to revisit sections as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
