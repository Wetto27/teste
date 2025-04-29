import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import PokemonCard from '../../components/PokemonCard';
import TradeModal from '../../components/TradeModal';
import NotificationBell from '../../components/NotificationBell';
import './styles.css';

const Collection = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [battleOpponent, setBattleOpponent] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const mockCards = [
          { id: 1, pokemonId: 25, ownerId: user?.id || 'mock-user-id' },
          { id: 2, pokemonId: 7, ownerId: user?.id || 'mock-user-id' },
          { id: 3, pokemonId: 4, ownerId: user?.id || 'mock-user-id' }
        ];
        setCards(mockCards);
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
            <PokemonCard 
              pokemonId={card.pokemonId} 
              cardData={card}
            />
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
    </div>
  );
};

export default Collection;