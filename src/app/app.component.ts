import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

// declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'application';

  ngAfterViewInit() {
    Feather.replace();
  }

  ngOnInit(){
    // (function ($) {
    //   $(".form_datetime").datetimepicker({
    //     format: "dd MM yyyy - hh:ii"
    // }); console.log('Loaded', $(".form_datetime"));
    // })(jQuery);
  }
  
}
