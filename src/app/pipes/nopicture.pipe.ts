import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nopicture'
})
export class NopicturePipe implements PipeTransform {

  transform(images: any[]): any {
    let noImage = 'assets/img/noimage.png';
    if(!images) {
      return noImage;
    }
    return (images.length > 0)? images[1].url : noImage;
  }

}
