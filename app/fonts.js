import localFont from 'next/font/local';

export const abcMarist = localFont({
  src: [
    {
      path: '../public/fonts/abc-marist/ABCMarist-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/abc-marist/ABCMarist-Medium.otf',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../public/fonts/abc-marist/ABCMarist-SemiBold.otf',
      weight: '600',
      style: 'semi-bold',
    },
  ],
  variable: '--font-abc-marist',
});
