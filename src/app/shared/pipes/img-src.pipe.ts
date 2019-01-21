import { Pipe, PipeTransform } from '@angular/core';
import { imgSrcParser } from '../shared-methods';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  transform(fileId: string): string {
    return  imgSrcParser(fileId);
  }
}
