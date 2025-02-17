import React from 'react';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
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

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="md:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />

      <div
        className={classNames(
          'fixed h-screen w-100 right-0 top-20 p-5 pt-0 bg-neutral-950 border-b border-b-white/20 transition-all',
          { '-translate-x-full': !isOpen }
        )}
      >
        <ul className="grid gap-2">
          {routes.map((route) => {
            return (
              <li key={route.title} className="w-full p-[0.08rem]">
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={'flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950'}
                  href={route.href}
                >
                  <span className="flex gap-1 text-lg">{route.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
