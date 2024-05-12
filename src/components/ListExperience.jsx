import React from 'react'
import Card from './ui/Card'
export default function ListExperience() {
  const listExperience = [
    {
      title: 'Yappy App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'yp.png',
    },
    {
      title: 'Banco General',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'bg.png',
    },
    {
      title: 'Copa Recojo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'copa.png',
    },
    {
      title: 'Start Optimus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'of.png',
    },
    {
      title: 'Vote planing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: '',
    },
  ]
  return <Card list={listExperience} />
}
