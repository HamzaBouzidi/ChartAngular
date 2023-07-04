import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  
  names: string[] = [
    'Antoine LOUIS',
    'Nicolas HEY',
    'Héloïse MARTEL',
    'Selman ALTAY',
    'Yunus COSAR',
    'Kévin WITZ',
    'Claire DZIANSKI',
    'Claire SCHOCH',
    'Geoffrey KINDELBERGER',
    'Wissem INOUBLI',
    'Marie BROTO',
  ];
  data: any[] = [
    {
      type: {
        '0': 'LEADERSHIP / INFLUENCE',
        '1': 'LEADERSHIP / INFLUENCE',
        '2': 'LEADERSHIP / INFLUENCE',
        '3': 'LEADERSHIP / INFLUENCE',
        '4': 'PRISE EN COMPTE DES AUTRES',
        '5': 'PRISE EN COMPTE DES AUTRES',
        '6': 'PRISE EN COMPTE DES AUTRES',
        '7': 'PRISE EN COMPTE DES AUTRES',
        '8': 'CREATIVITE / ADAPTABILITE',
        '9': 'CREATIVITE / ADAPTABILITE',
        '10': 'CREATIVITE / ADAPTABILITE',
        '11': 'CREATIVITE / ADAPTABILITE',
        '12': 'RIGUEUR',
        '13': 'RIGUEUR',
        '14': 'RIGUEUR',
        '15': 'RIGUEUR',
        '16': 'EQUILIBRE PERSONNEL',
        '17': 'EQUILIBRE PERSONNEL',
        '18': 'EQUILIBRE PERSONNEL',
        '19': 'EQUILIBRE PERSONNEL',
      },
      critere: {
        '0': "Prend l'ascendant sur les autres",
        '1': 'Cherche \u00e0 convaincre les autres',
        '2': 'Va spontan\u00e9ment vers les autres',
        '3': 'Fait preuve de diplomatie',
        '4': "S'implique affectivement",
        '5': "S'ouvre aux id\u00e9es des autres",
        '6': 'Accepte les critiques \u00e9mises',
        '7': 'Consulte avant de d\u00e9cider',
        '8': 'Est attir\u00e9 par les t\u00e2ches vari\u00e9es',
        '9': "S'int\u00e9resse aux choses abstraites",
        '10': "Fait preuve d'inventivit\u00e9",
        '11': "S'adapte aux changements",
        '12': "S'organise avec m\u00e9thode",
        '13': 'Pers\u00e9v\u00e8re face aux obstacles',
        '14': 'Va au del\u00e0 des t\u00e2ches prescrites',
        '15': "S'attache aux d\u00e9tails",
        '16': 'Se montre d\u00e9tendu',
        '17': "S'attache aux aspects positifs",
        '18': 'Contr\u00f4le ses \u00e9motions',
        '19': 'Recherche la stabilit\u00e9',
      },
      'Antoine LOUIS': {
        '0': 6,
        '1': 3,
        '2': 8,
        '3': 10,
        '4': 8,
        '5': 6,
        '6': 7,
        '7': 8,
        '8': 8,
        '9': 5,
        '10': 4,
        '11': 8,
        '12': 3,
        '13': 4,
        '14': 6,
        '15': 2,
        '16': 1,
        '17': 7,
        '18': 4,
        '19': 2,
      },
      'Nicolas HEY': {
        '0': 5,
        '1': 5,
        '2': 4,
        '3': 7,
        '4': 2,
        '5': 2,
        '6': 7,
        '7': 3,
        '8': 10,
        '9': 8,
        '10': 5,
        '11': 6,
        '12': 1,
        '13': 7,
        '14': 6,
        '15': 4,
        '16': 8,
        '17': 9,
        '18': 7,
        '19': 1,
      },
      'H\u00e9lo\u00efse MARTEL': {
        '0': 9,
        '1': 8,
        '2': 6,
        '3': 4,
        '4': 4,
        '5': 4,
        '6': 4,
        '7': 3,
        '8': 7,
        '9': 7,
        '10': 10,
        '11': 6,
        '12': 3,
        '13': 5,
        '14': 9,
        '15': 2,
        '16': 6,
        '17': 5,
        '18': 1,
        '19': 5,
      },
      'Selman ALTAY': {
        '0': 9,
        '1': 5,
        '2': 7,
        '3': 5,
        '4': 5,
        '5': 6,
        '6': 3,
        '7': 6,
        '8': 4,
        '9': 8,
        '10': 6,
        '11': 5,
        '12': 7,
        '13': 7,
        '14': 5,
        '15': 7,
        '16': 5,
        '17': 5,
        '18': 4,
        '19': 6,
      },
      'Yunus COSAR': {
        '0': 6,
        '1': 10,
        '2': 6,
        '3': 7,
        '4': 8,
        '5': 6,
        '6': 8,
        '7': 8,
        '8': 6,
        '9': 4,
        '10': 4,
        '11': 6,
        '12': 3,
        '13': 4,
        '14': 5,
        '15': 4,
        '16': 2,
        '17': 4,
        '18': 3,
        '19': 7,
      },
      'K\u00e9vin WITZ': {
        '0': 4,
        '1': 5,
        '2': 1,
        '3': 5,
        '4': 8,
        '5': 8,
        '6': 7,
        '7': 7,
        '8': 7,
        '9': 6,
        '10': 4,
        '11': 2,
        '12': 8,
        '13': 4,
        '14': 2,
        '15': 7,
        '16': 6,
        '17': 2,
        '18': 8,
        '19': 7,
      },
      'Claire DZIANSKI': {
        '0': 7,
        '1': 3,
        '2': 7,
        '3': 2,
        '4': 7,
        '5': 6,
        '6': 8,
        '7': 8,
        '8': 7,
        '9': 4,
        '10': 6,
        '11': 7,
        '12': 2,
        '13': 4,
        '14': 7,
        '15': 3,
        '16': 5,
        '17': 5,
        '18': 6,
        '19': 5,
      },
      'Claire SCHOCH': {
        '0': 5,
        '1': 1,
        '2': 7,
        '3': 3,
        '4': 9,
        '5': 9,
        '6': 8,
        '7': 7,
        '8': 6,
        '9': 5,
        '10': 6,
        '11': 5,
        '12': 4,
        '13': 5,
        '14': 6,
        '15': 4,
        '16': 5,
        '17': 5,
        '18': 4,
        '19': 7,
      },
      'Geoffrey KINDELBERGER': {
        '0': 5,
        '1': 2,
        '2': 6,
        '3': 5,
        '4': 6,
        '5': 4,
        '6': 5,
        '7': 5,
        '8': 5,
        '9': 3,
        '10': 10,
        '11': 6,
        '12': 5,
        '13': 6,
        '14': 2,
        '15': 6,
        '16': 5,
        '17': 7,
        '18': 4,
        '19': 10,
      },
      'Wissem INOUBLI': {
        '0': 6,
        '1': 7,
        '2': 5,
        '3': 2,
        '4': 5,
        '5': 6,
        '6': 5,
        '7': 2,
        '8': 5,
        '9': 6,
        '10': 9,
        '11': 6,
        '12': 7,
        '13': 4,
        '14': 6,
        '15': 5,
        '16': 5,
        '17': 4,
        '18': 5,
        '19': 7,
      },
      'Marie BROTO': {
        '0': 5,
        '1': 5,
        '2': 4,
        '3': 5,
        '4': 2,
        '5': 8,
        '6': 5,
        '7': 4,
        '8': 6,
        '9': 8,
        '10': 7,
        '11': 5,
        '12': 5,
        '13': 5,
        '14': 7,
        '15': 5,
        '16': 6,
        '17': 7,
        '18': 4,
        '19': 5,
      },
      equipe: {
        '0': 6.0909090909,
        '1': 4.9090909091,
        '2': 5.5454545455,
        '3': 5.0,
        '4': 5.8181818182,
        '5': 5.9090909091,
        '6': 6.0909090909,
        '7': 5.5454545455,
        '8': 6.4545454545,
        '9': 5.8181818182,
        '10': 6.4545454545,
        '11': 5.6363636364,
        '12': 4.3636363636,
        '13': 5.0,
        '14': 5.5454545455,
        '15': 4.4545454545,
        '16': 4.9090909091,
        '17': 5.4545454545,
        '18': 4.5454545455,
        '19': 5.6363636364,
      },
    },
  ];
}
