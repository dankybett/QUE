'use client'

import Section1 from '@/content/section1.mdx'
import SectionNavigation from '@/components/SectionNavigation'

export default function Section1Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Section1 />
      <SectionNavigation />
    </div>
  )
}