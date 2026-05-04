export default function Blogs() {

  const BASEURL = "/data/blogs"

  return (
    <>
      <p>April 29, 2026</p>
      <a href={`${BASEURL}/blog1.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">Looking back and why I chose computer science</a>

      <p className="mt-6">May 3, 2026</p>
      <a href={`${BASEURL}/blog2.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">How watching Bluelock changed me</a>

    </>
  );
}
