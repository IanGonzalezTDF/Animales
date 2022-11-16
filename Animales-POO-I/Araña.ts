import { Animal } from "./Animal"

export class Arania extends Animal {
    constructor(patas:number){
        super(patas);       
    }
    
    public comer():void {
        console.log(`Esta comiendo`)
    }

    public caminar(patas:number):void {
        console.log('Esta caminando');
        
    }
}
