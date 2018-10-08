import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';

@Injectable()
export class SearchService {
  //private url = "";
  constructor(private http:Http) { }

  getSearchResults(searchTerm:string) {
    //return this.http.get(this.url);
    let results = [
      {tag:"peas", itemId: 1},
      {tag:"peanuts", itemId: 2},
      {tag:"roasted peanuts", itemId: 3},
      {tag:"pallilu", itemId: 2},
      {tag:"pea nuts", itemId: 2},
      {tag:"salted peanuts", itemId: 6},
      {tag:"peanut butter", itemId: 7},
      {tag:"palli pachadi", itemId: 8},
      {tag:"pelli patti", itemId: 9},
      {tag:"peanut cake", itemId: 10}
    ];
    let finalResults=[];
    let i:number;
    for(i=0;i<results.length; i++) {
      let str = results[i].tag;
      let regEx = new RegExp(searchTerm,'i');
      let result = str.match(regEx);
      if(result != null) {
        finalResults.push(results[i]); 
      }
    }
    return finalResults;
  }
}
