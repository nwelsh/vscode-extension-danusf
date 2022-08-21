import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  marketplaceUrl: string;
  version: string;
  author: string;
  name: string;
  vsix: string;

  constructor() { }

  ngOnInit() {
    this.version = 'latest';
  }

  makeLink() {
    if (this.marketplaceUrl && this.version) {
      [this.author, this.name] = (this.marketplaceUrl.split('=')[1]).split('.');

      this.vsix = `https://${this.author}.gallery.vsassets.io/_apis/public/gallery/publisher/${this.author}/extension/${this.name}/${this.version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;
    } else {
      this.vsix = '';
    }
  }
}
