const BRAND_ICON_LIST = [
  { iconCode: 'javascript-plain', iconName: 'JavaScript' },
  { iconCode: 'html5-plain', iconName: 'HTML5' },
  { iconCode: 'css3-plain', iconName: 'CSS3' },
  { iconCode: 'react-original', iconName: 'React' },
  { iconCode: 'typescript-plain', iconName: 'TypeScript' },
  { iconCode: 'nextjs-original-wordmark', iconName: 'Next.js' },
  { iconCode: 'github-original', iconName: 'GitHub' },
  { iconCode: 'gitlab-plain', iconName: 'GitLab' },
  { iconCode: 'tailwindcss-original', iconName: 'Tailwind CSS' },
  { iconCode: 'materialui-plain', iconName: 'Material UI' },
  { iconCode: 'nodejs-plain-wordmark', iconName: 'Node.js' },
  { iconCode: 'npm-original-wordmark', iconName: 'NPM' },
  { iconCode: 'yarn-original', iconName: 'Yarn' },
  { iconCode: 'eslint-plain', iconName: 'ESLint' },
  { iconCode: 'vitest-plain', iconName: 'Vitest' },
  { iconCode: 'jest-plain', iconName: 'Jest' },
  { iconCode: 'heroku-original', iconName: 'Heroku' },
  { iconCode: 'python-plain', iconName: 'Python' },
  { iconCode: 'photoshop-plain', iconName: 'Photoshop' },
  { iconCode: 'illustrator-plain', iconName: 'Illustrator' },
];

export const BrandIcons = () => {
  return BRAND_ICON_LIST.map((icon) => (
    <div key={icon.iconCode}>
      <i className={`devicon-${icon.iconCode} mb-1 block w-full text-6xl`} />
      <div>{icon.iconName}</div>
    </div>
  ));
};
