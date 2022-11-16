import { Animal } from "./Animal";
import { Mascota } from "./interfaceMascota";

export class Pez extends Animal implements Mascota{
    private nombre:string;
    
    constructor(pNombre:string){
        super(0)
        this.nombre=pNombre;
    }

    public comer(): void {
        console.log(`El Pez esta comiendo`);
        
    }
    public caminar(patas: number): void {
        this.nadar();
    }

    public nadar():void{
        console.log(`Esta nadando`);
    }

    public jugar(pNombre:string):void {
        console.log('Esta jugando');        
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(paramNombre:string):void {
        this.nombre=paramNombre;
    }

    
    

    
}