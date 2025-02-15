import { NavBar } from './NavBar';
import { Header } from './Header';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { ResumeAndContact } from './sections/ResumeAndContact';

export const Home = () => {
  return (
    <div className="w-full text-gray-300 antialiased">
      <div>
        <NavBar />
        <header className="mx-auto flex h-screen w-full max-w-screen-md flex-col">
          <Header />
        </header>
        <main>
          <About />
        </main>
        <Skills />
        <Certifications />
        <ResumeAndContact />

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} Sasha Bausheva`}
        </footer>
      </div>
    </div>
  );
};
