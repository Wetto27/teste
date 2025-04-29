import React, { useState } from 'react';
import './styles.css';

const PokemonCard = ({ pokemonId, cardData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemonDetails(data);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (!showDetails && !pokemonDetails) {
      fetchDetails();
    }
    setShowDetails(!showDetails);
  };

  return (
    <div className={`pokemon-card ${showDetails ? 'expanded' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} 
          alt={pokemonDetails?.name || 'Pokémon'}
        />
        <h3>{pokemonDetails?.name || `#${pokemonId}`}</h3>
        
        {showDetails && pokemonDetails && (
          <div className="pokemon-details">
            <div className="types">
              {pokemonDetails.types.map((t, i) => (
                <span key={i} className={`type-${t.type.name}`}>
                  {t.type.name}
                </span>
              ))}
            </div>
            <div className="stats">
              <p>HP: {pokemonDetails.stats[0].base_stat}</p>
              <p>Ataque: {pokemonDetails.stats[1].base_stat}</p>
            </div>
          </div>
        )}
        
        {loading && <div className="loading">Carregando...</div>}
      </div>
    </div>
  );
};

export default PokemonCard;