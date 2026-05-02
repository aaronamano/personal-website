export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full gap-y-10">
                <div>
                    <h1 className="text-4xl text-primary text-center font-light tracking-tight">hi i'm aaron</h1>
                    <p className="text-center text-secondary mt-2">cs @ umich dearborn</p>
                </div>
                <img
                    src="assets/profile/pfp.png"
                    alt="my profile picture"
                    className="w-48 h-48 object-cover rounded-2xl block mx-auto"
                />
                <div className="text-center">
                    <p className="text-secondary text-sm">email: amanoac@umich.edu</p>
                    <p className="text-secondary text-sm">github: <a href="https://github.com/aaronamano" className='text-blue-700'>github.com/aaronamano</a></p>
                    <p className="text-secondary text-sm">twitter: <a href="https://x.com/aaronamano" className='text-blue-700'>x.com/aaronamano</a></p>
                    <p className="text-secondary text-sm">linkedin: <a href="https://linkedin.com/in/aaronamano" className='text-blue-700'>linkedin.com/in/aaronamano</a></p>
                </div>
                <footer className="text-center text-tertiary text-sm italic max-w-md">
                    "You just keep your head down, you just keep working and working away. It's just—you know, you just don't give up. You keep going, you keep pushing."
                    — Lewis Hamilton
                </footer>
            </div>
        </div>
    );
}
