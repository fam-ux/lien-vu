import usePageTitle from '../ui/usePageTitle'

const presentations = [
  'Vu, L., May, H., Houang, R., Del-Tufo, S. (2025, July). Kumon: let’s read for fun!, Poster presented at the Society for the Scientific Study of Reading (SSSR) in Calgary, Canada.',
  'Vu, L., Student, M. (2025, April). An Item-Level Investigation of the Impact of Kumon. Poster presented at the National Council on Measurement in Education. Denver, CO.',
  'Vu, L., Houang, R., May, H., Ran., F. (2024, April). Evaluation of the Impacts of Kumon Using Propensity Score Matching. Paper presented at the Steel Symposium. Newark, DE.',
  'Vu, L., Houang, R., May, H., Ran., F. (2024, April). Evaluation of the Impacts of Kumon Using Propensity Score Matching. Poster presented at the American Educational Research Association (AERA). Philadelphia, PA.',
  'Vu, L., Preston, M., Delgado, A., Patt, R., Golinkoff, G. (2023, March). An International Study on Children’s and Adults’ Perception of Play. Poster presented at the Biennial Meeting of the Society for Research in Child Development. Salt Lake City, Utah.',
  'Vu, L., Mouza, C. & Garvin, M. (2023). Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development. In Elizabeth Langran (Ed.), Proceedings of SITE International Conference (pp. 106-112). New Orleans, LA: AACE.',
  'Vu, L., Alkhateeb, B., Garvin, M., & Mouza, C. (2022, April). Using Word Clouds to Uncover Preservice Teachers’ Understanding of Computational Thinking in the Context of Teacher Education Coursework. SITE International Conference (pp. 1929-1937). San Diego, CA.',
  'Vu, L., Bower, C., Evans, N., Zimmermann, L., Verdine, B., Toub, T. S., Foster, L., Islam, S., Golinkoff, R. M., Hirsh-Pasek, K. (2019, March). Growth curve modeling of preschoolers’ spatial skills during spatial training. Poster presented at SRCD. Baltimore, MD.',
  'Vu, L., An International Comparison of Health Care Policy for Asian Ethnic Minorities, National Conferences on Undergraduate Research Proceedings, 1998. Presented at: National Undergraduate Research Conference',
  'Vu, L., An International Comparison of Health Care Policy for Asian Ethnic Minorities, McNair Research Journal, 1998. Presented at: Ronald E. McNair Research Conference and Barth-Crapsey Research Conference',
]

export default function PresentationsPage() {
  usePageTitle('Presentations — Dr. Lien Vu')
  return (
    <div className="space-y-8">
      <section className="rounded-xl p-5 bg-white ring-1 ring-brand-100 shadow-sm">
        <h3 className="text-lg font-semibold">Kumon: Let’s Read for Fun!</h3>
        <p className="mt-2 text-gray-800">
          In partnership with the University of Delaware, this research studied how children in Kumon’s reading and math programs develop a love for reading. Using surveys and achievement data from thousands of students, the team found that strong learning attitudes, academic engagement, and consistent practice were linked to greater reading enjoyment. These insights help Kumon and similar programs create learning experiences that foster both skills and a lifelong love of reading.
        </p>
        <div className="mt-3">
          <a
            className="inline-flex items-center gap-2 text-brand-700 font-medium hover:gap-3 transition-all"
            href="/posters/kumon-lets-read-for-fun.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Poster <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Presentations</h2>
        <ul className="mt-4 space-y-3 text-gray-800">
          {presentations.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}


