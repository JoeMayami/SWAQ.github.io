
export class TimeOut {

    public mStatus: boolean;

    constructor() {
        setTimeout(() => {
          return this.mStatus = true;
        }, 1000);
      }

}