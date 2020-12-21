export class CounterService{
    activeChanges: number = 0;
    inactiveChanges: number = 0;
    countActiveClicks(): void{
        this.activeChanges++;
        console.log("You've changed from active to inactive " + this.activeChanges  + ' times.');
    }

    countInactiveClicks():void{
        this.inactiveChanges++;
        console.log("You've changed from inactive to active " + this.inactiveChanges + ' times.');
    }
}