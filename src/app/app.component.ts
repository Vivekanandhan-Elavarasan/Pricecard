import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pricecard';
  priceCards=[
    {
      type:"FREE",
      price: 0,
      period:"month",
      list:[{
        title:"Single User",
        isAvailable:true,
        highlight:false
      },
      {
        title:"5GB Storage",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Public Projects",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Community Access",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Private Projects",
        isAvailable:false,
        highlight:false
      },
      {
        title:"Dedicated Phone Support",
        isAvailable:false,
        highlight:false
      },
      {
        title:"Free Subdomain",
        isAvailable:false,
        highlight:false
      },
      {
        title:"Monthly Status Reports",
        isAvailable:false,
        highlight:false
      }
    ]
    },
    {
      type:"PLUS",
      price: 9,
      period:"month",
      list:[{
        title:"5 Users",
        isAvailable:true,
        highlight:true
      },
      {
        title:"50GB Storage",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Public Projects",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Community Access",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Private Projects",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Dedicated Phone Support",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Free Subdomain",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Monthly Status Reports",
        isAvailable:false,
        highlight:false
      }
    ]
    },
    {
      type:"PRO",
      price: 49,
      period:"month",
      list:[{
        title:"Unlimited Users",
        isAvailable:true,
        highlight:true
      },
      {
        title:"5GB Storage",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Public Projects",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Community Access",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Unlimited Private Projects",
        isAvailable:true,
        highlight:true
      },
      {
        title:"Dedicated Phone Support",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Free Subdomain",
        isAvailable:true,
        highlight:false
      },
      {
        title:"Monthly Status Reports",
        isAvailable:true,
        highlight:false
      }
    ]
    }
  ]

}
