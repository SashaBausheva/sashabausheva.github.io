import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Typewriter } from './Typewriter';

const IMAGE_PROPS = {
  alt: 'hero image',
  width: 220,
  height: 220,
  className: 'mt-8 rounded-full border-4 border-gray-300',
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="m-auto flex w-full flex-col items-center justify-center">
      <h1 className={'text-3xl font-bold text-gray-300'}>
        {t('header_title')}
        <Typewriter />
      </h1>
      <div className="profile-image-container">
        <img src="/images/hero-image.jpg" {...IMAGE_PROPS} />
        <img src="/images/hero-image-hidden.jpg" {...IMAGE_PROPS} />
      </div>
      <section>
        <h1>{t('header_subtitle')}</h1>
      </section>
      <a href="#about">
        <button
          type="button"
          className="mt-10 transform-gpu rounded-full bg-gradient-to-r from-rose-300 to-red-400 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          {t('header_next_section_button')}
          <FontAwesomeIcon icon={faCaretDown} beat style={{ animationDuration: '0.7s' }} className="ml-2" />
        </button>
      </a>
    </div>
  );
};
