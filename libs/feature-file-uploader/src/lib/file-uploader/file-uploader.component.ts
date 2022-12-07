import { Component } from '@angular/core';
import {NzUploadChangeParam} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.less'],
})
export class FileUploaderComponent {
  constructor(private msg: NzMessageService) {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
