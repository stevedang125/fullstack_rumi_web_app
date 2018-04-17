import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(roommateList: any, inputString: any): any {
    // Check if the search inputString is empty/undefined
    if(inputString === undefined){
      return roommateList;
    }
    // If there is input string to search:
    return roommateList.filter(function(retVal){
      return retVal.name.toLowerCase().includes(inputString.toLowerCase());
    });
  }

}
