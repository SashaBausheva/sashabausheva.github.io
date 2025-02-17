import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrandIcons } from '../BrandIcons';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="flex h-screen items-center justify-center">
      <div className="max-w-screen-lg text-center">
        <h2 className="md:leading-10 py-8" style={{ fontSize: '1.5rem ' }}>
          {t('skills_title')}
        </h2>
        <div className="grid xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <BrandIcons />
        </div>
        <a href="#certifications">
          <button
            type="button"
            className="mt-10 transform-gpu rounded-full bg-gradient-to-r from-rose-300 to-red-400 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('skills_next_section_button')}
            <FontAwesomeIcon icon={faCaretDown} beat style={{ animationDuration: '0.7s' }} className="ml-2" />
          </button>
        </a>
      </div>
    </section>
  );
};
