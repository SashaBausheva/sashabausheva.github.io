import { useTranslation } from 'react-i18next';
import { NavBarDesktop } from './NavBarDesktop';
import { NavBarMobile } from './NavBarMobile';

export const NavBar = () => {
  const { i18n } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <nav
      className="fixed
 top-0 z-50 grid h-20 w-screen xs:grid-cols-2 md:grid-cols-3 items-center whitespace-nowrap bg-gradient-to-r from-rose-300 to-red-400 p-4 font-semibold text-white shadow-lg"
    >
      <NavBarDesktop />
      <NavBarMobile />
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
