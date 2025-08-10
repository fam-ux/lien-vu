import usePageTitle from '../ui/usePageTitle'

const service = [
  {
    header: 'Volunteer, President, Organization of Chinese Americans – Greater Philadelphia',
    detail:
      'Convention Chair, Philadelphia, PA, 2005–2008, 2013–2025. Founded in 1973, OCA is a national organization dedicated to advancing the social, political, and economic well-being of Asian Pacific Americans in the United States.',
  },
]

const societies = [
  'American Educational Research Association (AERA) — Since 2015',
  'Special Interest Group (Out-of-School Time, Research on Evaluation, Giftedness) — Since 2021',
  'National Council on Measurement in Education (NCME) — Since 2024',
  'National Association for Gifted Children, Research and Evaluation Committee — Since 2023',
  'Pennsylvania Association for Gifted Education (PAGE) — Since 2010',
  'Society for the Scientific Study of Reading (SSSR) — Since 2025',
  'Society for Research in Child Development (SRCD) — Since 2020',
]

export default function ServicePage() {
  usePageTitle('Service — Dr. Lien Vu')
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold">Service</h2>
        <ul className="mt-4 space-y-3">
          {service.map((s) => (
            <li key={s.header} className="text-gray-800">
              <div className="font-medium">{s.header}</div>
              <div className="text-sm text-gray-700 mt-1">{s.detail}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Professional Societies</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-800">
          {societies.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}


