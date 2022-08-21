/* Se realizara un programa sencillo para que un enemigo pueda recibir daño con decoradores aplicados.
Los decoradores son como la piel de un objeto (le añaden una característica específica reutilizable), si se quisiera modificar las tripas debe utilizar patrón Strategy.
El decorador aplica x cosa a un Componente, sin que el componente sepa */
import BaseEnemy from "./BaseEnemy";
import { HelmetDecorator } from './HelmetDecorator';
import { ArmourDecorator } from './ArmourDecorator';

let enemy = new BaseEnemy(); //Creamos un enemigo
let enemyWithHelmet = new HelmetDecorator(enemy); //Le agregamos casco (Decorador) al enemigo que creamos
let enemiyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet); //Le agregamos armadura al que ya tenia casco
let computedDamaged = enemiyWithHelmetAndArmour.takeDamage(); //Vemos cuanto daño le hacen al enemigo que creamos con casco y armadura.
console.log(computedDamaged)
