import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { PowdrLogo } from '@/components/powdrLogo'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-12 flex flex-col items-center justify-center">
          <Image src="/static/images/vector-art1.svg" alt="Powdr" width={600} height={600} />
          <p className="mt-8 text-center text-2xl">
            Powdr brings modularity, flexibility, security and excellent developer experience to
            zkVMs.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/examples"
              className="rounded-full bg-pink-400 px-6 py-3 text-lg font-semibold text-white hover:bg-pink-500"
            >
              Check out our examples
            </Link>
            <Link
              href="/docs"
              className="rounded-full bg-blue-200 px-6 py-3 text-lg font-semibold text-gray-800 hover:bg-blue-300"
            >
              Read our docs
            </Link>
          </div>

          {/*  "How it works" section */}
          <div className="mt-16 flex flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold">How it works</h2>
            <Image src="/static/images/vector-art2.svg" alt="Vector art" width={981} height={348} />
            <div className="mt-8 max-w-2xl text-center">
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
                  <SocialIcon kind="github" href={siteMetadata.github} size={8} />
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
                  <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
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
