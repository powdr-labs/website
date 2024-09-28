import Link from './Link'
import { PowdrLogo } from './powdrLogo'

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#1e1b4b] py-8 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <PowdrLogo className="mb-4 h-24 w-auto text-white" />
        <p className="mb-2 text-sm">
          © powdr labs GmbH {new Date().getFullYear()}-{new Date().getFullYear() + 1}. All Rights
          Reserved.
        </p>
        <div className="text-sm">
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
