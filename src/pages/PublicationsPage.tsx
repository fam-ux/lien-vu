import usePageTitle from '../ui/usePageTitle'

const pubs = [
  {
    citation:
      'Patt., R., Veng S., Vu., L., Shen., C.C., Mouza., C. “It’s More Like Recess and Cool”: Teaching Elementary Students Cybersecurity with a Social Robot. Journal of Interactive Learning Research.',
  },
  {
    citation:
      'Blinkoff, E., Wright, C. A., Scott, M., Fletcher, K., Masters, A. S., Ilgaz, H., Vu, L., Hirsh-Pasek, K., & Golinkoff, R. M. (2023). Shifting from a classroom of reluctant compliance to a classroom of responsive curiosity. Young Children, 78(3), 14-22.',
    link:
      'https://www.naeyc.org/resources/pubs/yc/fall2023',
  },
  {
    citation:
      'Dore. R.A., Hassinger-Das, B., Brezack, N., Valladares, T., Paller, A., Vu, L., Golinkoff, R.M., & Hirsh Pasek, K. (2018). The parent advantage in fostering children\'s e-book comprehension. Early Childhood Research Quarterly, 44, 24-33.',
  },
]

const reports = [
  {
    citation:
      'Vu, L., Mouza, C., & Garvin, M. (2024). Examining motivational constructs in computational thinking for preservice teacher development. In D. C. Gibson, M. N. Ochoa, & Y. Jin (Eds.), Research highlights in technology and teacher education 2023 (pp. 65-72). AACE.',
    link: 'https://www.learntechlib.org/primary/p/223858/',
  },
  {
    citation:
      'Bower, C., Vu, L., Golinkoff, R. M., & Hirsh-Pasek, K. (2019, July 12). School’s out: Block out time for spatial learning. Brookings Institution.',
    link:
      'https://www.brookings.edu/blog/education-plus-development/2019/07/09/schools-out-block-out-time-for-spatial-learning/',
  },
  {
    citation:
      'Byrnes, J.P., Vu, L. Educational Neuroscience: Definitional, Methodological, and Interpretive Issues, WIRES Cognitive Science, 2015.',
  },
]

export default function PublicationsPage() {
  usePageTitle('Publications — Dr. Lien Vu')
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Peer Reviewed Publications</h2>
        <ul className="mt-4 space-y-3">
          {pubs.map((p, idx) => (
            <li key={idx} className="text-gray-800">
              {p.citation}{' '}
              {p.link && (
                <a className="text-brand-700" href={p.link} target="_blank" rel="noreferrer">
                  link
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Reports and Book Chapters</h2>
        <ul className="mt-4 space-y-3">
          {reports.map((p, idx) => (
            <li key={idx} className="text-gray-800">
              {p.citation}{' '}
              {p.link && (
                <a className="text-brand-700" href={p.link} target="_blank" rel="noreferrer">
                  link
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}


