import { useTranslation } from 'react-i18next';

export const NavBarDesktop = () => {
  const { t } = useTranslation();

  const routes = [
    {
      title: t('about_link'),
      href: '#about',
    },
    {
      title: t('skills_link'),
      href: '#skills',
    },
    {
      title: t('certifications_link'),
      href: '#certifications',
    },
    {
      title: t('resume_link'),
      href: '#resume-and-contact',
    },
    {
      title: t('contact_link'),
      href: '#resume-and-contact',
    },
  ];
  return (
    <>
      <div className="xs:hidden md:inline-block" />
      <div className="xs:hidden md:flex justify-center gap-5">
        {routes.map((route) => (
          <li className="list-none" key={route.title}>
            <a className="text-white" href={route.href}>
              {route.title}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};
