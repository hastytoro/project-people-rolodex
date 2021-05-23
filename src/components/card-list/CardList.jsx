// CardList Component:
import React from 'react'
import { Card } from '../card/Card'
import './CardList.css'

export const CardList = props => (
  <div className='card-list'>
    {props.people.map(person =>
      <Card key={person.id} person={person}/>
    )}
  </div>
);

