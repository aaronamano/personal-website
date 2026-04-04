import { socials } from '../data/socials';

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
                    <div className="gap-4 mb-6">
                        <p className="text-secondary text-sm">email: amanoac [at] umich [dot] edu</p>
                        <p className="text-tertiary text-sm">phone: +1 (586) 522-7807</p>
                    </div>
                    <div className="flex justify-center gap-8">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} className="text-tertiary hover:text-primary transition-colors duration-200">
                                <i 
                                    className={`${social.icon} text-2xl`} 
                                    aria-hidden="true"
                                ></i>
                            </a>
                        ))}
                    </div>
                </div>
                <footer className="text-center text-tertiary text-sm italic max-w-md">
                    "You just keep your head down, you just keep working and working away. It's just—you know, you just don't give up. You keep going, you keep pushing."  
                    — Lewis Hamilton
                </footer>
            </div>
        </div>
    );
}
