// Verifique se a importação do arquivo correto está sendo feita.
const {
  getPokemonDetails,
  handlePokemonSearch,
} = require('./exercicio5');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um Pokémon que não existe no banco de dados', () => {
    expect(() => getPokemonDetails('Pokemon', handlePokemonSearch)).toThrow();
  });

  it('retorna um Pokémon que existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});
