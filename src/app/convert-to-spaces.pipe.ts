import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
  standalone: true
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('-' , ' ');
  }

  

}
