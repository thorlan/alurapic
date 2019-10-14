import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ], // tipo private
    exports: [ PhotoComponent ] // tipo publico
})
export class PhotosModule {

}