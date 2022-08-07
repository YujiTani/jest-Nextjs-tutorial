import type { NextPage } from 'next';
import { SearchForm } from '@/components/SerchForm';

export const Home: NextPage = () => {
  return (
    <>
      <div>Hello World</div>
      <SearchForm />
    </>
  );
};
