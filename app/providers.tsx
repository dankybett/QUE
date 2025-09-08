'use client'

import { MDXProvider } from '@mdx-js/react'
import Callout from '@/components/Callout'
import Accordion from '@/components/Accordion'
import VideoPlayer from '@/components/VideoPlayer'

const components = { Callout, Accordion, VideoPlayer }

export default function Providers({ children }:{children: React.ReactNode}){
  return <MDXProvider components={components}>{children}</MDXProvider>
}
