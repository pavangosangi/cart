import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  selectedFile: File = null;
  constructor(private http:HttpClient) { }

  form = new FormGroup({
    productTitle: new FormControl(),
    productDescription: new FormControl(),
    productPrice: new FormControl()
  })

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('',fd,{
      reportProgress:true,
      observe: 'events'
    })
    .subscribe(event=>{
      if(event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress: '+Math.round(event.loaded / event.total*100)+'%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });

  }

}
 