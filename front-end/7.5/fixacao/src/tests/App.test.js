import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('Teste do contador', () => {
  it('Se inicia com 2 botões e 2 headings com os textos corretos', () => {
    renderWithRedux(<App />)

    const headings = screen.getAllByRole('heading');
    const buttons = screen.getAllByRole('button');

    expect(headings).toHaveLength(2);
    expect(buttons).toHaveLength(2);
    expect(screen.getByRole('heading', { name: '0', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contador', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Incrementa 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Incrementa 5' })).toBeInTheDocument();
  });

  it('Se o valor mostrado na tela é o mesmo do estado global', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      },
    };
    renderWithRedux(<App />, { initialState });

    const count = screen.getByRole('heading', { name: '5', level: 2 });

    expect(count).toBeInTheDocument();
    expect(count).not.toHaveTextContent('0');
    expect(count).toHaveTextContent('5');
  });

  it('Se os botões incrementam 1 e 5 respectivamente ao contador', () => {
    renderWithRedux(<App />);

    const count = screen.getByRole('heading', { name: '0', level: 2 });
    const incrementOneButton = screen.getByRole('button', { name: 'Incrementa 1' })
    const incrementFiveButton = screen.getByRole('button', { name: 'Incrementa 5' })

    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('0');
    expect(incrementOneButton).toBeInTheDocument()
    expect(incrementFiveButton).toBeInTheDocument()

    userEvent.click(incrementOneButton);

    expect(count).toHaveTextContent('1');

    userEvent.click(incrementFiveButton);

    expect(count).toHaveTextContent('6');
  });
});
