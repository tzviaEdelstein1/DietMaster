import { Pipe } from "@angular/core";


@Pipe({        
    name: 'searchPipe'
})                       
export class SearchPipe {
   
     d: any[]=[];
    transform(data: any[], n: string): any[] {
        this.d = [];
        if (data != null) {
          debugger;
            for (var i = 0; i<data.length; i++) {
                if (data[i].name.indexOf(n) == 0)
                    this.d.push(data[i]);
            }
        }
        return this.d;
    }
}