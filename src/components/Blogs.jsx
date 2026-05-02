export default function Blogs() {

  const BASEURL = "public/data/blogs"

  return (
    <div>
      <p>April 29, 2026</p>
      <a href={`${BASEURL}/blog1.html`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">Looking back and why I chose computer science</a>
    </div>
  );
}
