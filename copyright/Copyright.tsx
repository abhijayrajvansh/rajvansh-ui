import Link from "next/link"

export default function Copyright () {
  return (
    <section className="mt-10 flex">
      {/* target="_blank" rel="noopener noreferrer" */}
      <Link isExternal href='https://linkedin.com/in/abhijayrajvansh'>
        <p className="text-white font-medium">© Abhijay Rajvansh</p>
      </Link>
      <p>, All Right Reserved.</p>
    </section>
  )
}