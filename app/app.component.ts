import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `
  //   <h1>{{title}}</h1>
  //   <h1>My favorite hero is: {{myHero}}</h1>
  // `,
  templateUrl: "./app/views/heros.html"
})
export class AppComponent {

  title = 'Tour of Heroes';
  myHero = 'Windstrom';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  clickMessage = "";

  values = "";
  values2 = "";

  onClickMe() {
    this.clickMessage = "You are my hero!";
    // alert(this.clickMessage);
  };

  onKeyUp(event:any) {
    this.values += event.target.value + ' | ';
  };

  onKeyUp2(value:string) {
    this.values2 += value + ' | ';
  }

  onKeyUpEnter3(value:string) {
    alert("收到监听事件，而且值：" + value);
  }

  onBlur(value:string) {
    alert("输入框失去焦点，且值为:" + value);
  }

}
