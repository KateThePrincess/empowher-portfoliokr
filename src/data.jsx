import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';
import { ImHeart } from 'react-icons/im';
import { nanoid } from 'nanoid';

// const sublinks = [
//   {
//     pageId: nanoid(),
//     page: 'product',
//     links: [
//       {
//         id: nanoid(),
//         label: 'community',
//         icon: <Fa500Px />,
//         url: '/product/community',
//       },
//       {
//         id: nanoid(),
//         label: 'content',
//         icon: <FaAccusoft />,
//         url: '/product/content',
//       },
//       {
//         id: nanoid(),
//         label: 'roles',
//         icon: <FaAdversal />,
//         url: '/product/roles',
//       },
//     ],
//   },
//   {
//     pageId: nanoid(),
//     page: 'solutions',
//     links: [
//       {
//         id: nanoid(),
//         label: 'developers',
//         icon: <FaAvianex />,
//         url: '/solutions/developers',
//       },
//       {
//         id: nanoid(),
//         label: 'content managers',
//         icon: <FaBitcoin />,
//         url: '/solutions/content-managers',
//       },
//       {
//         id: nanoid(),
//         label: 'business teams',
//         icon: <FaBtc />,
//         url: '/solutions/business teams',
//       },
//       {
//         id: nanoid(),
//         label: 'ecommerce',
//         icon: <FaCodiepie />,
//         url: '/solutions/ecommerce',
//       },
//     ],
//   },
//   {
//     page: 'resources',
//     pageId: nanoid(),
//     links: [
//       {
//         id: nanoid(),
//         label: 'starters',
//         icon: <FaDocker />,
//         url: '/resources/starters',
//       },
//       {
//         id: nanoid(),
//         label: 'showcase',
//         icon: <FaGithubSquare />,
//         url: '/resources/showcase',
//       },
//     ],
//   },
// ];

const sublinks = [
  {
    pageId: nanoid(),
    page: 'she cares',
    links: [
      {
        id: nanoid(),
        label: 'healthy meals',
        icon: <ImHeart />,
        url: '/self-care/meals',
      },
      {
        id: nanoid(),
        label: 'mental wellness',
        icon: <ImHeart />,
        url: '/self-care/mental-wellness',
      },
      {
        id: nanoid(),
        label: 'skincare tips',
        icon: <ImHeart />,
        url: '/self-care/skincare',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'her impact',
    links: [
      {
        id: nanoid(),
        label: 'time management',
        icon: <ImHeart />,
        url: '/self-development/time-management',
      },
      {
        id: nanoid(),
        label: 'skill building',
        icon: <ImHeart />,
        url: '/self-development/skill-building',
      },
      {
        id: nanoid(),
        label: 'networking',
        icon: <ImHeart />,
        url: '/self-development/networking',
      },
      {
        id: nanoid(),
        label: 'negotiation',
        icon: <ImHeart />,
        url: '/self-development/negotiation',
      },
    ],
  },
  {
    page: 'she rises',
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: 'confidence boost',
        icon: <ImHeart />,
        url: '/empowerment/confidence-boost',
      },
      {
        id: nanoid(),
        label: 'inspiring stories',
        icon: <ImHeart />,
        url: '/empowerment/inspiring-stories',
      },
      {
        id: nanoid(),
        label: 'motivation',
        icon: <ImHeart />,
        url: '/empowerment/motivation',
      },
    ],
  },
];

export default sublinks;
