'use client'

import Section5 from '@/content/section5.mdx'
import SectionNavigation from '@/components/SectionNavigation'

export default function Section5Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12">
          <Section5 />
        </div>
        <SectionNavigation />
      </div>
    </div>
  )
}