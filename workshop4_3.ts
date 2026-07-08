export{}
class BankAccount{
    constructor(public ownerName: string, public balance: number){}
    displayBalance(): void{
        console.log(`Account: ${this.ownerName}  Balance: ${this.balance}`)
    }
    deposit(amount: number): number{
        return this.balance=this.balance+amount
    }
    withdraw(amount: number): number{
        if (this.balance>amount){
            return this.balance=this.balance-amount;
        }
        else{
            console.log(`เงินในบัญชีไม่เพียงพอ จำนวนเงินเหลือ${this.balance}`)
        }
    }
}
const a1 = new BankAccount('javina',200);

a1.deposit(200);
a1.withdraw(1000)
a1.displayBalance();