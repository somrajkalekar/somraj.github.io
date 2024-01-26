export class CommonData {
    private cartCount = 0;

    incrementCartCount():void{
        this.cartCount++;
        console.log(this.cartCount);
    }

    decrementCartCount():void{
        this.cartCount--;
        console.log(this.cartCount);
    }

    getCartCount():number{
        return this.cartCount;
    }
}