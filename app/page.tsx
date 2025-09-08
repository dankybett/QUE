import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Questioning Unsettling Experiences
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A guided psycho-education resource to help young people understand and cope with unsettling perceptual experiences
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the sections below with your mental health worker. Each section includes plain-language explanations, reflections, and short practices.
          </p>
          
          <Link 
            href="/workbook"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            <span>Start the Workbook</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              This resource is designed for use with a mental health professional. 
              It is not intended as a substitute for professional diagnosis or treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
