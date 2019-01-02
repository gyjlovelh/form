import { Pipe, PipeTransform } from '@angular/core';
import { layoutType } from './hs-form-group';

@Pipe({
    name: 'layout'
})
export class LayoutPipe implements PipeTransform {

    transform(width: number, layout?: layoutType): any {
        if (layout === 'horizontal') {
            return width || null;
        }
        return null;
    }

}
