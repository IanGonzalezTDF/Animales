export abstract class Animal {
    private patas:number;

    constructor (pPatas:number){
        this.patas = pPatas;
    }

    public getPatas():number{
        return this.patas;
    }

    public setPatas(pPatas:number):void {
        this.patas = pPatas;
    }

    abstract comer():void;

    abstract caminar(patas:number):void;


}