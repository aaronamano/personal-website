import { pianoVideos } from '../data/piano';

export default function Piano() {
  return (
    <>
      <p className="mb-4"><b>Fun fact</b>: I've played piano for 8+ years. Here you can listen to my recordings by clicking on a title. You won't get rick-rolled.</p>
      <div className="space-y-4">
        {pianoVideos.map((video, index) => (
          <div key={index}>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl">{video.title}</a>
            {video.year && <span className="text-sm text-tertiary ml-2">({video.year})</span>}
          </div>
        ))}
      </div>
    </>
    );
}
