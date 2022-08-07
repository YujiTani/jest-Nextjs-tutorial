import Home from "src/pages/Home";
import { render, screen } from "@testing-library/react";


describe('rendering', () => {
    it('HomeコンポーネントにHello worldと表示されるかテスト', () => {
        render(<Home />)
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('ラベルがnameのinputがあるかどうかテスト', () => {
        render(<Home />)
        expect(screen.getByLabelText('name')).toBeInTheDocument()
    })


    // 落ちるはずのテスト
    // it('ラベルがemailのinputがあるかどうかテスト', () => {
    //     render(<Home />)
    //     expect(screen.getByLabelText('email')).toBeInTheDocument()
    // })
})