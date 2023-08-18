import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  selam =""
  isHidden = false
  kelam = "kelam"

  toggle () {
    this.isHidden = !this.isHidden

  }
  onChange(event: any) {
    
    if(this.selam == "nasılsın") {
      this.isHidden = true
    } else {
      this.isHidden = false
    }
  }

}
