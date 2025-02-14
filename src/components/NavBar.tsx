import React from 'react';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <nav
      className="fixed
 top-0 z-50 grid h-20 w-screen grid-cols-3 items-center whitespace-nowrap bg-gradient-to-r from-rose-300 to-red-400 p-4 font-semibold text-white shadow-lg"
    >
      <div />
      <div className="flex justify-center gap-5">
        <a href="#about">{t('about_link')}</a>
        <a href="#skills">{t('skills_link')}</a>
        <a href="#certifications">{t('certifications_link')}</a>
        <a href="#resume-and-contact">{t('resume_link')}</a>
        <a href="#resume-and-contact">{t('contact_link')}</a>
      </div>
      <div className="justify-self-end">
        <select onChange={onClickLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="jp">Japanese</option>
        </select>
      </div>
    </nav>
  );
};
