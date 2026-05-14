export default function Blogs() {

  const BASEURL = "/data/blogs"

  return (
    <>
      <p>Welcome to my blog channel where I pretty much talk about my life</p>

      <p className="mt-6">April 29, 2026</p>
      <a href={`${BASEURL}/blog1.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">Looking back and why I chose computer science</a>

      <p className="mt-6">May 3, 2026</p>
      <a href={`${BASEURL}/blog2.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">How watching Bluelock changed me</a>

      <p className="mt-6">May 8, 2026</p>
      <a href={`${BASEURL}/blog3.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">Navigating through noise</a>

      <p className="mt-6">May 14, 2026</p>
      <a href={`${BASEURL}/blog4.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">Fullstack dev is boring</a>

    </>
  );
}
