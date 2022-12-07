import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {NzMessageModule, NzMessageServiceModule} from "ng-zorro-antd/message";

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
    (key) => antDesignIcons[key]
);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ScrollingModule,
        DragDropModule,
        NzUploadModule,
        NzMessageModule,
        NzMessageServiceModule
    ],

    declarations: [FileUploaderComponent],
    exports: [FileUploaderComponent],
})
export class FileUploaderModule {
}
