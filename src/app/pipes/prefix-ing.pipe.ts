import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixIng'
})
export class PrefixIngPipe implements PipeTransform {

  transform(value: string): string {
    return "Ingénieur "+value;
  }

}
