import 'css/prism.css'
import 'katex/dist/katex.css'

import { allPrivacyPolicies } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { components } from '@/components/MDXComponents'

export default function Page() {
  const privacyPolicy = allPrivacyPolicies[0]
  const mainContent = coreContent(privacyPolicy)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {privacyPolicy.title}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert xl:col-span-3">
            <MDXLayoutRenderer code={privacyPolicy.body.code} components={components} />
          </div>
        </div>
      </div>
    </>
  )
}
