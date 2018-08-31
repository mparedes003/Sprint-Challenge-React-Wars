import React, { Component } from 'react';
import Character from "./Character";

const Characters = props => {
  return (
    <diuv>
      {props.characters.map(character => <Character key={character.id} data={character} />)}
    </diuv>
  )
}

export default Characters;