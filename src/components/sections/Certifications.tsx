
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="flex h-screen w-full justify-center text-center">
      <div className="flex max-w-screen-md flex-col items-center justify-center">
        <img
          src="/images/iaap-certified-cpacc.png"
          alt={t('certifications_cpacc_badge_alt')}
          width={150}
          height={150}
        />
        <h2 className="pt-2 leading-9 text-gray-700">{t('certifications_title')}</h2>
        <p className="my-6 font-medium text-gray-600">{t('certifications_subtitle')}</p>
        <a
          href="https://www.credly.com/badges/5c4687e6-7e0e-4979-8273-5464beb21de5/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="transform-gpu rounded-full bg-white px-8 py-4 font-bold text-rose-400 transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('certifications_show_credential_button')}
          </button>
        </a>
        <a href="#resume-and-contact">
          <button
            type="button"
            className="mt-20 transform-gpu rounded-full bg-gradient-to-r from-rose-300 to-red-400 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('certifications_next_section_button')}
            <FontAwesomeIcon icon={faCaretDown} beat style={{ animationDuration: '0.7s' }} className="ml-2" />
          </button>
        </a>
      </div>
    </section>
  );
};
