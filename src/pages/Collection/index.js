import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import PokemonCard from '../../components/PokemonCard';
import TradeModal from '../../components/TradeModal';
import NotificationBell from '../../components/NotificationBell';
import PokemonDetailsModal from '../../components/Details/PokemonDetailsModal';
import './styles.css';

const Collection = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [battleOpponent, setBattleOpponent] = useState('');
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  useEffect(() => {
    document.title = "Coleção";
    const fetchCards = async () => {
      try {
        const mockCards = [
          { id: 1, pokemonId: 151, ownerId: user?.id || 'mock-user-id' },
          { id: 2, pokemonId: 7, ownerId: user?.id || 'mock-user-id' },
          { id: 3, pokemonId: 4, ownerId: user?.id || 'mock-user-id' },
          { id: 4, pokemonId: 1, ownerId: user?.id || 'mock-user-id' }, // Exemplo de outro Pokémon
          { id: 5, pokemonId: 150, ownerId: user?.id || 'mock-user-id' } // Exemplo de outro Pokémon
        ];

        const detailedCards = await Promise.all(
          mockCards.map(async (card) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.pokemonId}`);
            const data = await res.json();

            console.log(data.sprites.front_default); // Verifica o link da imagem no console

            return {
              ...card,
              name: data.name,
              sprite: data.sprites.front_default || 'https://via.placeholder.com/96' // Fallback se não tiver imagem
            };
          })
        );

        setCards(detailedCards);
      } catch (error) {
        console.error('Erro ao buscar cartas:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCards();
    }
  }, [user]);

  const handleBattle = async () => {
    try {
      alert(`Desafio enviado para o jogador ${battleOpponent}! (Simulação)`);
    } catch (error) {
      alert('Erro ao enviar desafio');
    }
  };

  if (loading) return <div className="loading">Carregando sua coleção...</div>;

  return (
    <div className="collection-container">
      <div className="header">
        <h1>Minha Coleção Pokémon</h1>
        <NotificationBell />
      </div>

      <div className="battle-section">
        <input
          type="text"
          placeholder="ID do oponente"
          value={battleOpponent}
          onChange={(e) => setBattleOpponent(e.target.value)}
        />
        <button onClick={handleBattle}>Desafiar para Batalha</button>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <div onClick={() => setSelectedCardDetails(card)}>
              <PokemonCard
                pokemonId={card.pokemonId}
                name={card.name}
                sprite={card.sprite}
                cardData={card}
              />
            </div>
            <button
              className="trade-button"
              onClick={() => {
                setSelectedCard(card);
                setShowTradeModal(true);
              }}
            >
              Oferecer para Troca
            </button>
          </div>
        ))}
      </div>

      {showTradeModal && selectedCard && (
        <TradeModal
          card={selectedCard}
          onClose={() => setShowTradeModal(false)}
        />
      )}

      {selectedCardDetails && (
        <PokemonDetailsModal
          card={selectedCardDetails}
          onClose={() => setSelectedCardDetails(null)}
        />
      )}
    </div>
  );
};

export default Collection;
