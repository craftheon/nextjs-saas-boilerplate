import { act, fireEvent, render } from '@testing-library/react';
import App from '../App'


describe('KanbanNewCard', () => {
  it('添加新卡片', async () => {
    // Arrange 准备
    const onSubmit = jest.fn();
    // Act 动作
    const { findByText, findByRole } = render(
      <App />
    );

    // Assert 断言
    const titleElem = await findByText('添加新卡片');
    expect(titleElem).toBeInTheDocument();

    const inputElem = await findByRole('textbox');
    expect(inputElem).toHaveFocus();

    // Act 动作
    act(() => {
      fireEvent.change(inputElem, { target: { value: '单元测试新卡片-1' } });
      fireEvent.keyDown(inputElem, { key: 'Enter' });
    });

    // Assert 断言
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.lastCall[0]).toHaveProperty('title', '单元测试新卡片-1');
  });
});