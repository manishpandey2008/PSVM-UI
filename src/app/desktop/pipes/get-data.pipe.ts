import { Pipe, PipeTransform } from '@angular/core';
import { ApiControlService } from 'src/app/service/api-control.service';

@Pipe({
  name: 'getData'
})
export class GetDataPipe implements PipeTransform {

  constructor(private api:ApiControlService){}

  async transform(value: string, ...args: string[]): Promise<any> {
    if(!value || value==null){
      return Promise.resolve(null);
    }
   this.api.get(args[0],value).subscribe(resp=>{
      console.log("=========================resp[args[1]=======",resp[args[1]])
      return Promise.resolve(resp[args[1]]);
    })
  }
}
