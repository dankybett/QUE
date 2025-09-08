import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Questioning Unsettling Experiences
          </h1>
          <div className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            <p className="mb-4 font-medium">
              <span className="text-gray-800">Developed by:</span><br />
              Dan Stevens, Clinical Psychologist<br />
              Alisha Jones, Registered Mental Health Nurse
            </p>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Welcome to the Questioning Unsettling Experiences Workbook!
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This workbook is a collaborative creation between <strong>Early Intervention in Psychosis (North West Sussex)</strong> and <strong>i-Rock Horsham District</strong>. It is designed for Young People who have experienced strange, confusing, or unsettling visual experiences - these types of experiences are a lot more common than people think and do not always mean that something is "wrong" or that you are unwell.
            </p>
            
            <p>
              It is intended for Young People who have not been given a diagnosis of Psychosis or a Psychotic Disorder, but are confused, curious, or worried about their experiences and want to better understand their mind.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inside, we cover:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Information and ideas about brain processes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Examples of unusual visual experiences
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tools for reflection and managing distress
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Grounding and Mindfulness exercises
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Activities to reflect on your own experiences
                </li>
              </ul>
            </div>

            <p>
              You should initially be guided through the contents of the workbook by an <strong>i-Rock Practitioner across 3 safe and confidential sessions</strong>. After these sessions, you can use the workbook as a tool to keep coming back to in order to practice skills, refresh your knowledge, or reflect on your journey. Feel free to share it with loved ones or trusted Adults in your life.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="text-amber-800">
                <strong>Note:</strong> Some pages may feel more relevant to you than others. You can complete these in session with your i-Rock Practitioner or in your own time. Use them in a way that feels right for you. There is no right or wrong way to reflect on your experiences.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/workbook"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <span>Start the Workbook</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This resource is designed for use with a mental health professional. 
            It is not intended as a substitute for professional diagnosis or treatment.
          </p>
        </div>
      </div>
    </div>
  )
}
