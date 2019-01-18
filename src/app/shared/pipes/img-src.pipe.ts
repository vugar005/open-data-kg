import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc'
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  constructor() {
    this.hostname = localStorage.getItem('kg_hostname');
  }
  transform(fileId: number): string {
    return  `${this.hostname}/api/get/file/${fileId}`;
  }

}
