import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  // insert into {{ }}
  title = "Employee page";

  number1 = 22;
  number2 = 20;

  visible = this.ShowContent(this.number1, this.number2);
  IsVisible = true;
  color: any;
  //(this.number1 > this.number2)? true: false;

  myName: string = "COMWorks";

  Employee: Employee[] = [];

  constructor() {

    this.Employee = [
      {
        Name: 'Ah Kow',
        Age: 21,
        Gender: 'M'
      }, {
        Name: 'Ah Meow',
        Age: 22,
        Gender: 'F'
      }, {
        Name: 'Caterpillar',
        Age: 25,
        Gender: 'M'
      }
    ]
  }


  ShowContent(val1: number, val2: number): boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  OnChange(arg: any) {
    this.IsVisible = arg;
  }

  SetColor(event: any) {
    this.color = event.target.value;
  }

  GetMoreEmployee(): void {
    this.Employee = [
      {
        Name: 'Ah Kow',
        Age: 21,
        Gender: 'M'
      }, {
        Name: 'Ah Meow',
        Age: 22,
        Gender: 'F'
      }, {
        Name: 'Caterpillar',
        Age: 14,
        Gender: 'M'
      }, {
        Name: 'Dennis',
        Age: 15,
        Gender: 'M'
      }, {
        Name: 'Dionne',
        Age: 26,
        Gender: 'F'
      }, {
        Name: 'Darryl',
        Age: 45,
        Gender: 'M'
      }
    ]
  }

  CheckAge(Age: number) {
    let val = Age < 18 ? 'Under 18' : 'Above 18';

    switch (val) {
      case 'Under 18':
        return 'red';
      case 'Above 18':
        return 'green';
      default:
        return 'black'
    }
  }

  TrackByEmployeeName(index: number, employee: any): string {
    return employee.Name;
  }


  GetCSS(isEven: any) {
    if (isEven) {
      return "color1";
    } else {
      return "color2";
    }
  }

  ShowSomeData() {
    alert("Hello World!!!");
  }

}
