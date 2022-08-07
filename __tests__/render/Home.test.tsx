import { render, screen } from '@testing-library/react';
import { Home } from '@/pages/index';

describe('rendering', () => {
  it('HomeコンポーネントにHello worldと表示されている', () => {
    render(<Home />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  // 落ちるはずのテスト
//   it('ラベルがemailのinputがあるかどうかテスト', () => {
//     render(<Home />);
//     expect(screen.getByLabelText('email')).toBeInTheDocument();
//   });

  it('HomeコンポーネントにSerchFormコンポーネントがレンダーされている', () => {
    render(<Home />);
    expect(screen.getByText('名前')).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
