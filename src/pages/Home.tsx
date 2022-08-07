import type { NextPage } from 'next';
import { SearchForm } from 'src/components/SerchForm';

const Home: NextPage = () => {
  return (
    <>
      <div>Hello World</div>
      <label>
        name
        <input type="text" placeholder="名前を入力してください" />
        <SearchForm />
      </label>
    </>
  );
};
export default Home;
