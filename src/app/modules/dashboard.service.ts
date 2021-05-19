import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [{
      name:'Asia',
      data: [111,222,333,444,555]
    },
    {
      name:'Africa',
      data: [111,222,333,444,555]
    },
    {
      name:'Europe',
      data: [111,222,333,444,555]
    },
    {
      name:'America',
      data: [111,222,333,444,555]
    },
    {
      name:'OCenia',
      data: [111,222,333,444,555]
    }]
  }
}
