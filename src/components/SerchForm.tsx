import React, { useState } from 'react';

export const SearchForm = () => {
  const [firstName, setFirstName] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onClick = () => {
    // 検索の処理
  };

  return (
    <div>
      <label>
        名前
        <input
          type="text"
          placeholder="名前を入力してください"
          onChange={onChange}
          value={firstName}
        />
      </label>
      <button onClick={onClick}>検索</button>
    </div>
  );
};
