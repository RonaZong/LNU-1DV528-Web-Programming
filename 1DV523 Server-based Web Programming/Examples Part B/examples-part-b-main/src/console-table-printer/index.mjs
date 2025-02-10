/**
 * Print out a datastructure into a table using console.table().
 */

// // CJS style
// const { printTable } = require('console-table-printer');
// const { Table } = require('console-table-printer');

// ESM style
import { printTable, Table } from 'console-table-printer'

const persons = [
    {
        "id": 1,
        "firstName": "Phuong",
        "lastName": "Allison"
    },
    {
        "id": 2,
        "firstName": "Marie",
        "lastName": "Collinsworth"
    },
    {
    "id": 3,
    "firstName": "Simon",
    "lastName": "Uzzle"
    },
    {
    "id": 4,
    "firstName": "Faustina",
    "lastName": "Byfield"
    },
    {
    "id": 5,
    "firstName": "Robbie",
    "lastName": "Perdue"
    },
    {
    "id": 6,
    "firstName": "Lue",
    "lastName": "Lover"
    },
    {
    "id": 7,
    "firstName": "Etha",
    "lastName": "Nolley"
    },
    {
    "id": 8,
    "firstName": "Jeremiah",
    "lastName": "Lindauer"
    },
    {
    "id": 9,
    "firstName": "Coreen",
    "lastName": "Olin"
    },
    {
    "id": 10,
    "firstName": "Josh",
    "lastName": "Wayland"
    },
    {
    "id": 11,
    "firstName": "Soo",
    "lastName": "Pullins"
    },
    {
    "id": 12,
    "firstName": "Shana",
    "lastName": "Monty"
    }
]

printTable(persons)

const p = new Table({
  columns: [
    { name: 'id', alignment: 'center', color: 'blue' }, // with alignment and color
    { name: 'firstName', alignment: 'left' },
    { name: 'lastName', title: 'Last name', color: 'custom_green' }, // with Title as separate Text
  ],
  colorMap: {
    custom_green: '\x1b[32m', // define customized color
  },
});

p.addRows(persons)
p.printTable()
