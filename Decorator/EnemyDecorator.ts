import { Enemy } from './Enemy';
/* Debe incluir al componente que deberá decorar (Enemy) */ 

export default abstract class EnemyDecorator implements Enemy{
    
    protected enemy: Enemy;

    constructor(enemy: Enemy){
        this.enemy = enemy;
    }
    
    takeDamage(): number {
      return this.enemy.takeDamage();
    }

}