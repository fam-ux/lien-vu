import usePageTitle from '../ui/usePageTitle'

const roles = [
  {
    title: 'Certified Instructor, Director and Owner',
    org: 'Kumon Math and Reading Center, Willow Grove/Hatboro & Elkins Park, PA',
    years: '2006–Present',
  },
  {
    title: 'Senior Business Analyst, Marketing Analysis',
    org: 'Advanta Corp., Spring House, PA',
    years: '2001–2005',
  },
  {
    title: 'Consultant, Management Consulting Services',
    org: 'PricewaterhouseCoopers LLP, Rosslyn, VA',
    years: '2000–2001',
  },
  {
    title: 'Assistant to the Director',
    org: 'Division of International Finance, Federal Reserve Board of Governors, Washington, D.C.',
    years: '1999–2000',
    note: 'Recipient of the 2000 Annual Cash Award for outstanding service.',
  },
  {
    title: 'Research Assistant',
    org: 'Research and Statistics Division, Federal Reserve Board of Governors, Washington, D.C.',
    years: '1998–1999',
  },
]

export default function ExperiencePage() {
  usePageTitle('Experience — Dr. Lien Vu')
  return (
    <div>
      <h2 className="text-xl font-semibold">Professional Experience</h2>
      <ul className="mt-4 space-y-4">
        {roles.map((r) => (
          <li key={r.title} className="border rounded-lg p-4">
            <div className="font-medium">{r.title}</div>
            <div className="text-sm text-gray-700">{r.org}</div>
            <div className="text-sm text-gray-500">{r.years}</div>
            {r.note && <div className="text-sm text-gray-600 mt-1">{r.note}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}


