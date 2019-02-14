import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpRequest, HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class CustomFilePickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    const form = new FormData();
    form.append('image', fileItem.file);
    const api = 'api/post/uploadFile';
    const req = new HttpRequest('POST', api, form, {reportProgress: true});
    return this.http.request(req)
    .pipe(
      map( (res: HttpEvent<any>) => {
        if (res.type === HttpEventType.Response) {
          return res.body.data;
        } else {
          return res;
        }
      })
      );
  }
    public removeFile(id: string, fileItem): Observable<any> {
      console.log(id);
    const removeApi = `api/post/file/${id}/remove`;
    return this.http.post(removeApi, {});
    }
}
