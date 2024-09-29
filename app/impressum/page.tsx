import PageTitle from '@/components/PageTitle'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Impressum' })

export default function Impressum() {
  return (
    <>
      <PageTitle>Impressum</PageTitle>
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        <h2>powdr labs GmbH</h2>
        <p>
          Fichtestr, 32
          <br />
          10967 Berlin
        </p>
        <p>
          Handelsregister: HRB260037B
          <br />
          Registergericht: Charlottenburg
        </p>

        <h2>Vertreten durch:</h2>
        <p>
          Leonardo de Sá Alt
          <br />
          Thibaut Schaeffer
        </p>

        <h2>Kontakt</h2>
        <p>E-Mail: info@powdrlabs.com</p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </>
  )
}
