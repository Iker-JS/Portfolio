
import { readFileSync } from 'fs';
import { randomSuperhero } from 'superheroes';
import {randomSupervillain} from 'supervillains';
import sw from 'star-wars-quotes';

var superHeroName = randomSuperhero();
var superVillainName = randomSupervillain();
var secret = readFileSync('./data/input.txt', 'utf-8');
console.log('Hello world!! \n');


console.log(`${superHeroName}: You are lost ${superVillainName}\n`);
console.log(`${superVillainName}: There's nothing you can do, I'll destroy everything you love!!!\n`)
console.log(`${superHeroName}: I will destroy you, just as I did with your empire\n`)
console.log(`${superVillainName}: I'd like to see you try it.\n`)

console.log(sw())
console.log(`\n"${secret}"`);
