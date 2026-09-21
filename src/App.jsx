import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Piano from './components/Piano';
import Workshops from './components/Workshops';

const TABS = {
  ABOUTME: 'aboutme',
  EXPERIENCE: 'experience',
  PIANO: 'piano',
  WORKSHOPS: 'workshops'
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.ABOUTME);

  const tabs = [
    { id: TABS.ABOUTME, label: 'me' },
    { id: TABS.EXPERIENCE, label: 'xp' },
    { id: TABS.PIANO, label: 'piano' },
    { id: TABS.WORKSHOPS, label: 'Workshops' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case TABS.ABOUTME:
        return <AboutMe />;
      case TABS.EXPERIENCE:
        return <Experience />;
      case TABS.PIANO:
        return <Piano />;
      case TABS.WORKSHOPS:
        return <Workshops />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <ThemeToggle />
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <div className="flex flex-wrap justify-center mb-12 gap-8 max-sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`text-sm uppercase tracking-widest transition duration-200 ${
                activeTab === tab.id 
                  ? 'text-primary font-medium border-b-2 border-black dark:border-white' 
                  : 'text-tertiary hover:text-secondary border-b-2 border-transparent'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="min-h-96">
          {renderContent()}
        </div>
      </main>
    </>
  );
}

export default App;
