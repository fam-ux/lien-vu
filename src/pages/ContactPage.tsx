import usePageTitle from '../ui/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact — Dr. Lien Vu')
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="text-gray-800">I welcome inquiries about research collaborations and consulting projects.</p>
      <div className="space-y-1 text-gray-800">
        <div>North Wales, PA 19454</div>
        <div>215-237-7331</div>
        <div>
          <a className="text-brand-700" href="mailto:lienvu@udel.edu">lienvu@udel.edu</a>
        </div>
      </div>
    </div>
  )
}


