import React from 'react';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="flex h-screen flex-col items-center justify-center text-gray-700">
      <div className="max-w-screen-md text-center">
        <h2 className="mt-0 font-semibold text-gray-600">{t('about_title')}</h2>

        <p className="my-6 font-medium text-gray-700">{t('about_paragraph_1')}</p>
        <p className="font-medium text-gray-700">{t('about_paragraph_2')}</p>
        <a href="#skills">
          <button
            type="button"
            className="mt-10 transform-gpu rounded-full bg-gradient-to-r from-rose-300 to-red-400 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('about_next_section_button')}
            <FontAwesomeIcon icon={faCaretDown} beat style={{ animationDuration: '0.7s' }} className="ml-2" />
          </button>
        </a>
      </div>
    </section>
  );
};
