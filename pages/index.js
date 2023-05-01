import Image from 'next/image';
import { Inter } from 'next/font/google';
import MainTable from '@/components/MainTable';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <MainTable />;
}
