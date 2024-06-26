import Link from "next/link"

export default function Copyright () {
  return (
    <section className="mt-5 flex p-4">
      {/* target="_blank" rel="noopener noreferrer" */}
      <Link  href='https://linkedin.com/in/abhijayrajvansh' target="_blank" rel="noopener noreferrer">
        <p className="text-white font-medium">© Abhijay Rajvansh</p>
      </Link>
      <p>, All Right Reserved.</p>
    </section>
  )
}