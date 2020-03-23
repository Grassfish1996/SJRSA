import { Component, OnInit } from '@angular/core';

interface ItemData {
  stuid: number;
  name: string;
  sex: string;
  birthday: string;
  email: string;
  phoneNumber: string;
  college: string;
  class: string;
}

@Component({
  selector: 'app-stu-list',
  templateUrl: './stu-list.component.html',
  styleUrls: ['./stu-list.component.scss']
})
export class StuListComponent implements OnInit {

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  thlist = [
    {
      label: '学号',
      key: 'stuid',
    },
    {
      label: '姓名',
      key: 'name',
    },
    {
      label: '性别',
      key: 'sex',
    },
    {
      label: '出生日期',
      key: 'birthday',
    },
    {
      label: '邮箱',
      key: 'email',
    },
    {
      label: '手机号',
      key: 'phoneNumber',
    },
    {
      label: '学院',
      key: 'college',
    },
    {
      label: '班级',
      key: 'class',
    },
  ];

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.stuid]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.stuid]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.stuid] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        stuid: 201313130000+i,
        name: '张三',
        sex: '0',
        birthday: '2020-03-14T12:12:43.117Z',
        email: '1@1.com',
        phoneNumber: '15611112222',
        college: '0001',
        class: 'rj1401'
      });
    }
  }

}
