import usePageTitle from '../ui/usePageTitle'

export default function CvPage() {
  usePageTitle('CV — Dr. Lien Vu')
  return (
    <div className="space-y-6">
      <div className="no-print flex gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.print()
          }}
          className="text-sm text-brand-700"
        >
          Print CV
        </a>
      </div>

      <header className="text-center">
        <h1 className="text-2xl font-semibold">Lien Vu</h1>
        <div className="text-gray-700">Ph.D. Candidate, Educational Statistics & Research Methods</div>
        <div className="text-sm text-gray-600">University of Delaware</div>
        <div className="mt-2 text-sm text-gray-700">North Wales, PA 19454 • 215-237-7331 • lienvu@udel.edu</div>
      </header>

      <section>
        <h2 className="font-semibold border-b pb-1">Education</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Ph.D., Educational Statistics and Research Methods, University of Delaware — expected 2026</li>
          <li>M.S., Educational Studies, Johns Hopkins University (2011). Certificates in Mind, Brain, Teaching and Gifted Education</li>
          <li>B.A., Double Major in Economics and Health & Society (Cum Laude), University of Rochester (1998)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Research Focus</h2>
        <ul className="mt-2 list-disc list-inside text-gray-800">
          <li>Statistical techniques to evaluate STEM learning through interventions, PD, and instructional programs</li>
          <li>Educational neuroscience, cognitive development, and mechanisms of learning informing instructional principles</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Honors and Awards</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>2024 — First Place Graduate Paper, Steel Symposium, University of Delaware</li>
          <li>2023 — Selected Delegate, Kakehashi Project, APAICS</li>
          <li>2014 — Participant, AERA Institute on Statistical Analysis for Education Policy (Causal Analysis Using International Data)</li>
          <li>2010 — School of Education Scholarship, Johns Hopkins University</li>
          <li>1998 — Charles E. Phelps Scholar; Senior Scholar, University of Rochester</li>
          <li>1997 — Barth-Crapsey Undergraduate Research Award, University of Rochester</li>
          <li>1996 — Reach for Rochester Community Service Scholarship, University of Rochester</li>
          <li>1995 — Howard Hughes Summer Research Fellowship, University of Rochester</li>
          <li>1994 — Ronald E. McNair Post-Baccalaureate Achievement Scholar, University of Rochester</li>
          <li>1994 — Bausch and Lomb Scholarship, University of Rochester</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Peer Reviewed Publications</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Patt., R., Veng S., Vu., L., Shen., C.C., Mouza., C. “It’s More Like Recess and Cool”: Teaching Elementary Students Cybersecurity with a Social Robot. Journal of Interactive Learning Research.</li>
          <li>Blinkoff, E., Wright, C. A., Scott, M., Fletcher, K., Masters, A. S., Ilgaz, H., Vu, L., Hirsh-Pasek, K., & Golinkoff, R. M. (2023). Shifting from a classroom of reluctant compliance to a classroom of responsive curiosity. Young Children, 78(3), 14-22. https://www.naeyc.org/resources/pubs/yc/fall2023</li>
          <li>Dore. R.A., Hassinger-Das, B., Brezack, N., Valladares, T., Paller, A., Vu, L., Golinkoff, R.M., & Hirsh Pasek, K. (2018). The parent advantage in fostering children's e-book comprehension. Early Childhood Research Quarterly, 44, 24-33.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Reports and Book Chapters</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Vu, L., Mouza, C., & Garvin, M. (2024). Examining motivational constructs in computational thinking for preservice teacher development. In D. C. Gibson, M. N. Ochoa, & Y. Jin (Eds.), Research highlights in technology and teacher education 2023 (pp. 65-72). AACE. https://www.learntechlib.org/primary/p/223858/</li>
          <li>Bower, C., Vu, L., Golinkoff, R. M., & Hirsh-Pasek, K. (2019, July 12). School’s out: Block out time for spatial learning. Brookings Institution. https://www.brookings.edu/blog/education-plus-development/2019/07/09/schools-out-block-out-time-for-spatial-learning/</li>
          <li>Byrnes, J.P., Vu, L. Educational Neuroscience: Definitional, Methodological, and Interpretive Issues, WIRES Cognitive Science, 2015.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Presentations</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Kumon: let’s read for fun!, SSSR (2025)</li>
          <li>An Item-Level Investigation of the Impact of Kumon, NCME (2025)</li>
          <li>Evaluation of the Impacts of Kumon Using Propensity Score Matching, Steel Symposium (2024) and AERA (2024)</li>
          <li>An International Study on Children’s and Adults’ Perception of Play, SRCD (2023)</li>
          <li>Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development, SITE (2023)</li>
          <li>Using Word Clouds to Uncover Preservice Teachers’ Understanding of Computational Thinking, SITE (2022)</li>
          <li>Growth curve modeling of preschoolers’ spatial skills during spatial training, SRCD (2019)</li>
          <li>International Comparison of Health Care Policy for Asian Ethnic Minorities, NCUR and McNair (1998)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Professional Experience</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Certified Instructor, Director and Owner, Kumon Math and Reading Center, Willow Grove/Hatboro & Elkins Park, PA (2006–Present)</li>
          <li>Senior Business Analyst, Marketing Analysis, Advanta Corp., Spring House, PA (2001–2005)</li>
          <li>Consultant, Management Consulting Services, PricewaterhouseCoopers LLP, Rosslyn, VA (2000–2001)</li>
          <li>Assistant to the Director, Division of International Finance, Federal Reserve Board of Governors, Washington, D.C. (1999–2000). Recipient of the 2000 Annual Cash Award for outstanding service.</li>
          <li>Research Assistant, Research and Statistics Division, Federal Reserve Board of Governors, Washington, D.C. (1998–1999)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Statistical Software</h2>
        <p className="mt-2 text-gray-800">SAS, R, JASP, JAGS, STAN, STATA, MPlus, SPSS</p>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Service and Professional Societies</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Volunteer, President, Organization of Chinese Americans – Greater Philadelphia; Convention Chair (2005–2008, 2013–2025)</li>
          <li>American Educational Research Association (AERA) — Since 2015</li>
          <li>Special Interest Groups: Out-of-School Time, Research on Evaluation, Giftedness — Since 2021</li>
          <li>National Council on Measurement in Education (NCME) — Since 2024</li>
          <li>National Association for Gifted Children, Research and Evaluation Committee — Since 2023</li>
          <li>Pennsylvania Association for Gifted Education (PAGE) — Since 2010</li>
          <li>Society for the Scientific Study of Reading (SSSR) — Since 2025</li>
          <li>Society for Research in Child Development (SRCD) — Since 2020</li>
        </ul>
      </section>
    </div>
  )
}


