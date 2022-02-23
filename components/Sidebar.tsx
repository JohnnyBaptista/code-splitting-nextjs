import React, { useEffect, useState } from 'react';

interface SidebarProps {
    isOpen: boolean;
}

interface Pokemon {
    name: string;
    url: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const getPokemons = async () => {
        try {
            fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
            .then(res => res.json())
            .then(data => {
                setPokemon(data.results);
            });
        } catch (error) {
            console.log({error});
        }
    }

    useEffect(() => {
        if(isOpen) {
             getPokemons();
        }
    }, [isOpen])

    return isOpen ? (
      <div className='page'>
          {pokemon.length > 0 && pokemon.map((p, index) => (
              <span key={p.url}>Pokemon {(index + 1).toString()} = {p.name}</span>
          ))}
      </div>
  ) : <></>;
}

export default Sidebar;