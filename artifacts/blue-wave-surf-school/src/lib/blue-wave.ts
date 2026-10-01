export const WHATSAPP_NUMBER = '212614222911';
export const PHONE_DISPLAY = '+212 614 222 911';
export const INSTAGRAM_URL = 'https://www.instagram.com/blue_wave_surf_school/';
export const INSTAGRAM_HANDLE = '@blue_wave_surf_school';

export const NAV_ITEMS = [
  ['Lessons', '#lessons'],
  ['About', '#about'],
  ['Kids', '#kids'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
] as const;

export const LESSONS = [
  {
    title: 'Beginner',
    number: '01',
    description: 'Learn ocean safety, board handling, paddling and the basics of standing up and catching your first waves.',
  },
  {
    title: 'Intermediate',
    number: '02',
    description: 'Improve positioning, wave selection, take-offs and control so you can surf with more confidence.',
  },
  {
    title: 'Advanced',
    number: '03',
    description: 'Work on technique, speed, line choice and performance with sessions adapted to your goals.',
  },
] as const;

export const KIDS_PHOTOS = [
  {
    src: '/images/kids/kids-training.jpg',
    alt: 'Children practise paddling on surfboards at the water’s edge',
    caption: 'First paddles at the shore',
  },
  {
    src: '/images/kids/kids-coaching.jpeg',
    alt: 'A surf coach demonstrates a board position while children practise',
    caption: 'Practising on the board',
  },
  {
    src: '/images/kids/kids-group.jpg',
    alt: 'A child gets help standing on a surfboard in shallow water',
    caption: 'Finding balance in the shallows',
  },
  {
    src: '/images/kids/kids-beach.jpg',
    alt: 'Children and a coach practise surf skills on the beach',
    caption: 'Learning together on the beach',
  },
] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;