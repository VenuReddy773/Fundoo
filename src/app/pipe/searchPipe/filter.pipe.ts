import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args?:string):any {
    if(!args) {return value;}
    console.log(args);
    console.log(value);
    return value.filter((item:any)=>{
      return item.title.includes(args);
    })
  }
}
