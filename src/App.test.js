import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renderiza titulo de Campeonato de filmes', () => {
  render(<App />);
  const titleElement = screen.getByText(/Campeonato de filmes/)
  expect(titleElement).toBeInTheDocument();
});

test('Renderiza descrição de primeira etapa de caompeonato de filmes', () => {
  render(<App/>)
  const descricaoElement = screen.getByText('Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão gerar meu campeonato para prosseguir');
  expect(descricaoElement).toBeInTheDocument()
})

test('renderiza lista de filmes localmente', () => {
  render(<App/>)
  // const descricaoElement = screen.getByText('Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão gerar meu campeonato para prosseguir');
  const botaoElement = screen.getByText(/Gerar meu campeonato/);
  expect(botaoElement).toBeInTheDocument()
})