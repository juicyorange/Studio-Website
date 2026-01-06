import AceTernityLogo from '@/components/logos/aceternity';
import SlideShow from '@/components/slide-show';
import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from 'react-icons/ri';
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
const BASE_PATH = '/assets/projects-screenshots';

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8'>
      <Link
        className='font-mono underline flex gap-2'
        rel='noopener'
        target='_new'
        href={live}
      >
        <Button variant={'default'} size={'sm'}>
          Visit Website
          <ArrowUpRight className='ml-3 w-5 h-5' />
        </Button>
      </Link>
      {repo && (
        <Link
          className='font-mono underline flex gap-2'
          rel='noopener'
          target='_new'
          href={repo}
        >
          <Button variant={'default'} size={'sm'}>
            Github
            <ArrowUpRight className='ml-3 w-5 h-5' />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: 'Next.js',
    bg: 'black',
    fg: 'white',
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: 'Chakra UI',
    bg: 'black',
    fg: 'white',
    icon: <SiChakraui />,
  },
  node: {
    title: 'Node.js',
    bg: 'black',
    fg: 'white',
    icon: <RiNodejsFill />,
  },
  python: {
    title: 'Python',
    bg: 'black',
    fg: 'white',
    icon: <SiPython />,
  },
  prisma: {
    title: 'prisma',
    bg: 'black',
    fg: 'white',
    icon: <SiPrisma />,
  },
  postgres: {
    title: 'PostgreSQL',
    bg: 'black',
    fg: 'white',
    icon: <SiPostgresql />,
  },
  mongo: {
    title: 'MongoDB',
    bg: 'black',
    fg: 'white',
    icon: <SiMongodb />,
  },
  express: {
    title: 'Express',
    bg: 'black',
    fg: 'white',
    icon: <SiExpress />,
  },
  reactQuery: {
    title: 'React Query',
    bg: 'black',
    fg: 'white',
    icon: <SiReactquery />,
  },
  shadcn: {
    title: 'ShanCN UI',
    bg: 'black',
    fg: 'white',
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: 'Aceternity',
    bg: 'black',
    fg: 'white',
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: 'Tailwind',
    bg: 'black',
    fg: 'white',
    icon: <SiTailwindcss />,
  },
  docker: {
    title: 'Docker',
    bg: 'black',
    fg: 'white',
    icon: <SiDocker />,
  },
  yjs: {
    title: 'Y.js',
    bg: 'black',
    fg: 'white',
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: 'Firebase',
    bg: 'black',
    fg: 'white',
    icon: <SiFirebase />,
  },
  sockerio: {
    title: 'Socket.io',
    bg: 'black',
    fg: 'white',
    icon: <SiSocketdotio />,
  },
  js: {
    title: 'JavaScript',
    bg: 'black',
    fg: 'white',
    icon: <SiJavascript />,
  },
  ts: {
    title: 'TypeScript',
    bg: 'black',
    fg: 'white',
    icon: <SiTypescript />,
  },
  vue: {
    title: 'Vue.js',
    bg: 'black',
    fg: 'white',
    icon: <SiVuedotjs />,
  },
  react: {
    title: 'React.js',
    bg: 'black',
    fg: 'white',
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: 'Sanity',
    bg: 'black',
    fg: 'white',
    icon: <SiSanity />,
  },
  spline: {
    title: 'Spline',
    bg: 'black',
    fg: 'white',
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: 'GSAP',
    bg: 'black',
    fg: 'white',
    icon: '',
  },
  framerMotion: {
    title: 'Framer Motion',
    bg: 'black',
    fg: 'white',
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: 'Supabase',
    bg: 'black',
    fg: 'white',
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
};
const projects: Project[] = [
  {
    id: '1',
    category: '25/1',
    title: '사귄 첫번째 달',
    src: '/assets/memory/1.png',
  },
  {
    id: '2',
    category: '25/2',
    title: '처음으로 같이간 여행',
    src: '/assets/memory/2.png',
  },
  {
    id: '3',
    category: '25/3',
    title: '함께한 지희 생일',
    src: '/assets/memory/3.png',
  },
  {
    id: '4',
    category: '25/3',
    title: '첫 제주도 여행',
    src: '/assets/memory/4.png',
  },
  {
    id: '5',
    category: '25/4',
    title: '벚꽃 핀 4월',
    src: '/assets/memory/5.png',
  },
  {
    id: '6',
    category: '25/5',
    title: '무도 마라톤',
    src: '/assets/memory/6.png',
  },
  {
    id: '7',
    category: '24/6',
    title: '워터파크&연희동 전시회',
    src: '/assets/memory/7.png',
  },
  {
    id: '8',
    category: '24/7',
    title: '부산 여행',
    src: '/assets/memory/8.png',
  },
  {
    id: '9',
    category: '25/8',
    title: '함께 다시 간 제주도',
    src: '/assets/memory/9.png',
  },
  {
    id: '10',
    category: '25/9',
    title: '경복궁 야간 개장',
    src: '/assets/memory/10.png',
  },
  {
    id: '11',
    category: '25/10',
    title: '이것저것',
    src: '/assets/memory/11.png',
  },
  {
    id: '12',
    category: '25/11',
    title: '이모저모',
    src: '/assets/memory/12.png',
  },
  {
    id: '13',
    category: '25/12',
    title: '크리스마스&25년 마지막 날',
    src: '/assets/memory/13.png',
  },
];
export default projects;
