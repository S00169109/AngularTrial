import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {
replacement:string = "€";
  transform(value: string, character:string): string {
    this.replacement.concat(value);
    
    return value
  }

}
