import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { Github, Mail } from '@/components/social-icons/icons'

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-12 flex flex-col items-center justify-center">
          <Image src="/static/images/vector-art1.svg" alt="Powdr" width={600} height={600} />
          <p className="mt-8 text-center font-mono text-2xl font-light">
            Powdr brings modularity, flexibility, security and excellent developer experience to
            zkVMs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/examples">
              <div className="bg-primary rounded-full px-6 py-3 text-lg font-semibold text-primary-950 transition-all duration-300 hover:shadow-lg">
                Check out our examples
              </div>
            </Link>
            <Link href="/docs">
              <div className="rounded-full bg-blue-200 px-6 py-3 text-lg font-semibold text-gray-800 transition-all duration-300 hover:shadow-lg">
                Read our docs
              </div>
            </Link>
          </div>

          {/*  "How it works" section */}
          <div className="mt-16 flex flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold">How it works</h2>
            <Image src="/static/images/vector-art2.svg" alt="Vector art" width={981} height={348} />
            <div className="mt-8 max-w-2xl text-center font-mono text-xl font-light">
              <p className="mb-4">
                Design a new zkVM in hours, through a user-defined ISA, which powdr compiles into a
                zkVM.
              </p>
              <p>Generate proofs using eSTARK, Halo2, Nova, and whatever comes next.</p>
            </div>
          </div>

          {/* "Want to see more?" section */}
          <div className="mt-16 flex flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold">Want to see more?</h2>
            <div className="flex space-x-8">
              <Link
                href={siteMetadata.github}
                className="group relative flex h-48 w-64 flex-col items-center justify-center rounded-3xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:shadow-lg"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)',
                  }}
                ></div>
                <div className="z-10 flex flex-col items-center justify-center">
                  <Github className="h-8 w-8 fill-current text-gray-700" />
                  <p className="mt-4 text-lg font-semibold">Check our Github</p>
                </div>
              </Link>
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="group relative flex h-48 w-64 flex-col items-center justify-center rounded-3xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:shadow-lg"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)',
                  }}
                ></div>
                <div className="z-10 flex flex-col items-center justify-center">
                  <Mail className="h-8 w-8 fill-current text-gray-700" />
                  <p className="mt-4 text-lg font-semibold">Contact us by email</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
