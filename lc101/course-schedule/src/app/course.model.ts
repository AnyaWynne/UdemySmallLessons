import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

export class Course {
   public title: string;
   public code: string;
   public days: string[];
   public startTime: string;
   public endTime: string;
   public credits: number;

    constructor(title: string, code: string, days: string[], startTime: string, endTime: string, credits: number){
        this.title = title,
        this.code = code,
        this.days = days,
        this.startTime = startTime, 
        this.endTime = endTime,
        this.credits = credits
    }
getDays() {
    return this.days.join("/");
}

}