import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

export const Typewriter = () => {
  const { t, i18n } = useTranslation();

  return (
    <TypeAnimation
      key={i18n.language}
      sequence={[t('typewriter_text_1'), 3500, t('typewriter_text_2'), 3500, t('typewriter_text_3'), 3500]}
      wrapper="span"
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
