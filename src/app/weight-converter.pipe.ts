import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightConverter'
})
export class WeightConverterPipe implements PipeTransform {

  transform(value: number , unit : string){

      if(value && !(NaN)){

           if(unit === "Kgs"){
             var weight = value / 2.2;
             return weight.toFixed(1);
           }

           if(unit === "Pounds"){
            var weight = value * 2.2;
            return weight.toFixed(1);
          }

      }

    return;
  }

}
