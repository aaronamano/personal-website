const Resume = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="w-full h-[600px] flex flex-col bg-white dark:bg-white">
          <iframe
            src="/assets/resume/Aaron_Amano_resume.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
