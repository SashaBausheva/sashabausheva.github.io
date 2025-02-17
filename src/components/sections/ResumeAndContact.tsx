
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPhone, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

type ContactItemProps = {
  title: string;
  icon: IconDefinition;
};

export const ResumeAndContact = () => {
  const { t } = useTranslation();

  const ContactItem = ({ title, icon }: ContactItemProps) => (
    <div className="text-center">
      <FontAwesomeIcon icon={icon} size="2xl" className="block mb-1" />
      <div>{title}</div>
    </div>
  );

  return (
    <section id="resume-and-contact" className="flex h-[50vh] w-full flex-col items-center justify-center gap-8">
      <a href="/public/Sasha_Bausheva_Resume.pdf" target="_blank">
        <button
          type="button"
          className="transform-gpu rounded-full bg-gradient-to-r from-rose-300 to-red-400 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          {t('download_resume_button')}
          <FontAwesomeIcon icon={faDownload} bounce style={{ animationDuration: '1.5s' }} className="ml-2" />
        </button>
      </a>
      <div className="mt-10 grid xs:grid-cols-2 lg:grid-cols-4 gap-y-3 justify-between">
        <ContactItem title="abausheva@gmail.com" icon={faEnvelope} />
        <ContactItem title="570-768-8788" icon={faPhone} />
        <ContactItem title="sasha-bausheva" icon={faLinkedin} />
        <ContactItem title="SashaBausheva" icon={faGithub} />
      </div>
    </section>
  );
};
