import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { Github, Mail } from '@/components/social-icons/icons'

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-12 flex flex-col items-center justify-center">
          <Image
            src="/static/images/vector-art1.svg"
            alt="Powdr"
            width={600}
            height={600}
            className="object-contain py-8 dark:hidden"
          />
          <Image
            src="/static/images/vector-art1-dark.svg"
            alt="Powdr"
            width={600}
            height={600}
            className="hidden object-contain py-8 dark:block"
          />
          <p className="mt-8 text-center font-mono text-lg font-light md:text-2xl">
            Powdr brings modularity, flexibility, security and excellent developer experience to
            zkVMs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="https://github.com/powdr-labs/powdr/tree/main/riscv/tests/riscv_data/vec_median">
              <div className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-950 transition-all duration-300 hover:bg-primary-400">
                Check out our examples
              </div>
            </Link>
            <Link href="https://docs.powdr.org/">
              <div className="rounded-full bg-secondary px-6 py-3 text-lg font-semibold text-secondary-950 transition-all duration-300 hover:bg-secondary-300">
                Read our docs
              </div>
            </Link>
          </div>

          {/*  "How it works" section */}
          <div className="mt-16 flex flex-col items-center justify-center py-12">
            <h2 className="mb-8 text-3xl font-bold">How it works</h2>
            <Image
              src="/static/images/vector-art2.svg"
              alt="Vector art"
              width={981}
              height={348}
              className="dark:hidden"
            />
            <Image
              src="/static/images/vector-art2-dark.svg"
              alt="Vector art"
              width={981}
              height={348}
              className="hidden dark:block"
            />
            <div className="mt-8 max-w-2xl text-center font-mono text-base font-light md:text-lg">
              <p className="mb-4">
                Design a new zkVM in hours, through a user-defined ISA, which powdr compiles into a
                zkVM.
              </p>
              <p>Generate proofs using eSTARK, Halo2, Nova, and whatever comes next.</p>
            </div>
          </div>

          {/* "Want to see more?" section */}
          <div className="mt-16 flex flex-col items-center justify-center py-12">
            <h2 className="mb-8 text-3xl font-bold">Want to see more?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={siteMetadata.github}
                className="group relative flex h-48 w-64 flex-col items-center justify-center rounded-3xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:shadow-lg dark:hover:text-gray-700"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)',
                  }}
                ></div>
                <div className="z-10 flex flex-col items-center justify-center">
                  <Github className="h-8 w-8 fill-current" />
                  <p className="mt-4 text-lg font-semibold">Check our Github</p>
                </div>
              </Link>
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="group relative flex h-48 w-64 flex-col items-center justify-center rounded-3xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:shadow-lg dark:hover:text-gray-700"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)',
                  }}
                ></div>
                <div className="z-10 flex flex-col items-center justify-center">
                  <Mail className="h-8 w-8 fill-current" />
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
