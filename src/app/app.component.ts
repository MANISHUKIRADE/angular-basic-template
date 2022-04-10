import { Component } from '@angular/core';
import axios, { AxiosResponseHeaders } from 'axios';
type Device={
  "Lat":number,
  "Lng":number,
  "r_volt_status":number,
  "r_load_status":number,
  "r_mcb_status":number,
  "r_pf_status":number,
  "_id":string,
  "mac_id":string,
  "panel_name":string,
}
type Device_data= Array<Device>;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-basic';
  deviceData: Device_data=[];
  ngOnInit(): void {
    this.getDeviceData();
  }
  async getDeviceData(){
    let that = this;
    await axios.get('http://uat.lightingmanager.in/panel/gettestlist',{
      params:{
        org_id:3
      }
    }).then((res)=>{
      if(res?.data){
        that.deviceData = res.data.result;
      }
    })
  }

}
