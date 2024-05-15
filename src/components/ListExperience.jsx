import React from 'react'
import Card from './ui/Card'
export default function ListExperience() {
  const listExperience = [
    {
      title: 'Yappy App',
      description:
        'The application, initially a module within mobile banking, now robustly supports multiple banks with enhanced features.',
      icon: 'yp.png',
    },
    {
      title: 'Banco General',
      description:
        'Banking application where you can transfer between accounts, to third parties, and also make service payments.',
      icon: 'bg.png',
    },
    {
      title: 'Copa Recojo',
      description:
        'Efficient trip management application for seamless commuting between home and work.',
      icon: 'copa.png',
    },
    {
      title: 'Start Optimus',
      description:
        'Vehicle fleet management application featuring GPS tracking and more capabilities.',
      icon: 'of.png',
    },
    {
      title: 'Vote planing',
      description:
        'Application for voting in planning sessions under the Agile Scrum methodology. Comming soon.',
      icon: 'v.png',
    },
  ]
  return <Card list={listExperience} />
}
