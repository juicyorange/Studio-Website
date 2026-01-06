// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = 'js',
  TS = 'ts',
  HTML = 'html',
  CSS = 'css',
  REACT = 'react',
  VUE = 'vue',
  NEXTJS = 'nextjs',
  TAILWIND = 'tailwind',
  NODEJS = 'nodejs',
  EXPRESS = 'express',
  POSTGRES = 'postgres',
  MONGODB = 'mongodb',
  GIT = 'git',
  GITHUB = 'github',
  PRETTIER = 'prettier',
  NPM = 'npm',
  FIREBASE = 'firebase',
  WORDPRESS = 'wordpress',
  LINUX = 'linux',
  DOCKER = 'docker',
  NGINX = 'nginx',
  AWS = 'aws',
  VIM = 'vim',
  VERCEL = 'vercel',
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: '우',
    label: '우',
    shortDescription: '우리가 만난 지 어느덧 1년이 되는 날이야.',
    color: '#f0db4f',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  [SkillNames.TS]: {
    id: 2,
    name: '리',
    label: '리',
    shortDescription:
      '이번 한 해 동안 지히와 함께해서\n정말 행복하고 재미있었어.',
    color: '#007acc',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  [SkillNames.HTML]: {
    id: 3,
    name: '함',
    label: '함',
    shortDescription: '함께여서 이런 감정을\n느낄 수 있었던 것 같아.',
    color: '#e34c26',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  [SkillNames.CSS]: {
    id: 4,
    name: '께',
    label: '께',
    shortDescription:
      '계절이 벌써 4번이나 지나갔어\n그동안 용산~이수~범계 우리의 추억이 정말 많아.',
    color: '#563d7c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  [SkillNames.REACT]: {
    id: 5,
    name: '한',
    label: '한',
    shortDescription: '한 해 동안 내 옆에서\n함께해줘서 너무 고마워 ♥️',
    color: '#61dafb',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  [SkillNames.VUE]: {
    id: 6,
    name: '꽃',
    label: '꽃',
    shortDescription: '(꽃보다 예쁜 초절정미녀를 위해\n꽃도 넣어봤어 ㅎㅎ)',
    color: '#41b883',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: '첫',
    label: '첫',
    shortDescription:
      '첫 만남 고속터미널에서는 우리가 1주년을 함께 축하하게 될 줄 몰랐을 거야.',
    color: '#fff',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: '번',
    label: '번',
    shortDescription:
      '번번이 특별한 날은 아니었어도 지희와 함께해서 너무너무 좋았어.',
    color: '#38bdf8',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: '째',
    label: '째',
    shortDescription:
      '제일 잘한 일 중 하나는 새해 인사를 보낸거야. 덕분에 행복한 날들을 보냈어',
    color: '#6cc24a',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: '해',
    label: '해',
    shortDescription:
      '해가 쨍쨍하던 제주도, 쌀쌀할때 갔던 온천, 함께한 크리스마스 등등 한해가 좋은 기억으로 가득해',
    color: '#fff',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: '🐵',
    label: '🐵',
    shortDescription: '(장난기 많은 원숭이) &',
    color: '#336791',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: '🐱',
    label: '🐱',
    shortDescription: '& (귀여운 고양이)',
    color: '#336791',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  [SkillNames.GIT]: {
    id: 13,
    name: '고',
    label: '고',
    shortDescription:
      '고마운 순간들을 하나씩 떠올려보니\n생각보다 훨씬 더 많더라고.',
    color: '#f1502f',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: '마',
    label: '마',
    shortDescription: '마음이 서툴러서 서로 오해하고\n다툴 때도 종종 있었지만,',
    color: '#000000',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: '워',
    label: '워',
    shortDescription:
      '워낙 말이 서툰 나를 네가\n많이 이해해주고 기다려줘서 고마워.',
    color: '#f7b93a',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg',
  },
  [SkillNames.NPM]: {
    id: 16,
    name: '지',
    label: '지',
    shortDescription:
      '지금까지 서로 대화하며\n잘 맞춰올 수 있어 정말로 다행이야.',
    color: '#fff',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: '희',
    label: '희',
    shortDescription: '히히 웃는 날들이\n앞으로 더 많았으면 좋겠다.',
    color: '#ffca28',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: '야',
    label: '야',
    shortDescription: '(지히)야! 앞으로도 나랑\n지금처럼 재미있게 지내줄 거지?',
    color: '#007acc',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: '사',
    label: '사',
    shortDescription:
      '사실 작년에 지히가 힘들어 할 때\n더 든든하게 옆에 못 있어줘서 미안해.',
    color: '#fff',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: '랑',
    label: '랑',
    shortDescription: '올해는 기댈 수 있는 사람이 될게.',
    color: '#2496ed',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: '해',
    label: '해',
    shortDescription: '해가 바뀌어도 같이 웃고,',
    color: '#008000',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  [SkillNames.AWS]: {
    id: 22,
    name: '항',
    label: '항',
    shortDescription: '항상 함께 행복했으면 좋겠어.',
    color: '#ff9900',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
  },
  [SkillNames.VIM]: {
    id: 23,
    name: '상',
    label: '상',
    shortDescription: '상상보다 더 재밌고, 즐거운 날들을 함께 만들어나가자',
    color: '#e34c26',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg',
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: '♥️',
    label: '♥️',
    shortDescription: '사랑해♥️\n26.01.08 태영이가',
    color: '#6cc24a',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  },
};

export const themeDisclaimers = {
  light: [
    'Warning: Light mode emits a gazillion lumens of pure radiance!',
    "Caution: Light mode ahead! Please don't try this at home.",
    'Only trained professionals can handle this much brightness. Proceed with sunglasses!',
    'Brace yourself! Light mode is about to make everything shine brighter than your future.',
    'Flipping the switch to light mode... Are you sure your eyes are ready for this?',
  ],
  dark: [
    'Light mode? I thought you went insane... but welcome back to the dark side!',
    'Switching to dark mode... How was life on the bright side?',
    'Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.',
    'Welcome back to the shadows. How was life out there in the light?',
    'Dark mode on! Finally, someone who understands true sophistication.',
  ],
};
