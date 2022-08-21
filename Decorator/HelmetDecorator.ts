import EnemyDecorator from "./EnemyDecorator";

export class HelmetDecorator extends EnemyDecorator{
    takeDamage(): number{
        return (this.enemy.takeDamage()/2); // Si tiene casco como decorador de enemigo, recibe la mitad del daño
    }
}