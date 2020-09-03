import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
import { UrlResolver } from '@angular/compiler';
@Pipe({
  name: 'userFilter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(users :User[],serachByUser : string,searchByDesignation:string) : User[]
  {
    // if( serachByUser || searchByDesignation){
    //   return users;
    // }
    if(users && users.length){
      return users.filter(user =>{
        if(serachByUser &&  user.Name.toLowerCase().indexOf(serachByUser.toLowerCase())===-1){
          return false;
        }
        if(searchByDesignation &&  user.Designation.toLowerCase().indexOf(searchByDesignation.toLowerCase())===-1){
          return false;
        }
        return true;
      })
    }
    else{
      return users;
    }
    
  }
}
        
        
    
   
  //  return users.filter(user =>
  //     user.Name.toLowerCase().indexOf(serachByUser.toLowerCase()) !==-1);
    
  //  return users.filter(user =>
  //       user.Name.toLowerCase().indexOf(searchByDesignation.toLowerCase()) !==-1);
  


