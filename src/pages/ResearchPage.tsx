import usePageTitle from '../ui/usePageTitle'

export default function ResearchPage() {
  usePageTitle('Research — Dr. Lien Vu')
  return (
    <article className="prose max-w-none">
      <h2>Research Focus</h2>
      <ul>
        <li>
          Application of statistical techniques to evaluate STEM learning through interventions, professional development, and instructional programs.
        </li>
        <li>
          Educational neuroscience, cognitive development, and research into the fundamental mechanisms of learning as they inform development of instructional principles.
        </li>
      </ul>
    </article>
  )
}


