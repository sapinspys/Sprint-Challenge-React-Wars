import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
        <div className="character-card">
            <img src="" alt=""/>
            <div className="character-info">
                <h3></h3>
                <p><strong>Name:</strong>{props.character.name}</p>
                <p><strong>Species:</strong>{props.character.species}</p>
                <p><strong>Home World:</strong>{props.character.homeWorld}</p>
                <p><strong>Birth Year:</strong>{props.character.birthYear}</p>
                <p><strong>Films:</strong>{props.character.films}</p>
            </div>
        </div>
    )
}

export default Character;