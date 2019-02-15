import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
        <div className="character-card">
            <img src="" alt=""/>
            <div className="character-info">
                <h3></h3>
                <p className='character-name'><strong>{props.character.name}</strong></p>
                <p><strong>Species: </strong>{props.character.species}</p>
                <p><strong>Home World: </strong>{props.character.homeworld}</p>
                <p><strong>Birth Year: </strong>{props.character.birth_year}</p>
                <ul><strong>Films:</strong>
                    {props.character.films.map((film,index) => {
                        return <React.Fragment>
                            <li>{film}</li> {props.character.films - 1 !== index}
                        </React.Fragment>
                    })}
                </ul>
            </div>
        </div>
    )
}

{/* {JSON.stringify(props.character.films.map(film => props.swapiFunc(film)))} */}
export default Character;