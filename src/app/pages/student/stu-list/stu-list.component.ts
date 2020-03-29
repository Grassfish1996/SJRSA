import { Component, OnInit } from '@angular/core';

import {map} from 'rxjs/operators';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Navigation, Router} from '@angular/router';
import {StudentApi} from '../../../api/student.api';
import {classidMap, collegeidMap, sexMap} from '../../../statics/CollegeAndClass';

interface ItemData {
  id: number;
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

  srcData = [];

  thlist = [
    {
      label: '学号',
      key: 'id',
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
      key: 'phone',
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


  constructor(
    private studentApi: StudentApi,
    private message: NzMessageService,
    private router:Router,
    private modalService: NzModalService,
  ) {
  }
  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.studentApi.getStudentList().pipe(
      map(data=>this.dataConvert(data))
    ).subscribe(res=>{
      if(res){
        this.listOfAllData = res;
      }
    });
  }

  //将班级id等信息转换成中文
  dataConvert(dataList){
    this.srcData = JSON.parse(JSON.stringify(dataList));
    console.log('srcdata=>',this.srcData);
    for (let data of dataList){
      let collegeid = data.collegeid;
      data['college'] = collegeidMap[collegeid];
      let classid = data.classid;
      data['class'] = classidMap[classid];
      data['sex'] = sexMap[data.sex];
    }
    return dataList;
  }

  initFakeData(){
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: 201313130000 + i,
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

  updateOne(id){
    let data = this.srcData.filter(item=>item.id==id)[0];
    console.log(data);
    //数据转成
    let collegeAndClass = [data['collegeid'],data['classid']];
    data['collegeAndClass'] = collegeAndClass;
    this.router.navigateByUrl('/stu-update',{ state: data });
  }

  deleteOne(id){
    let dataList = this.srcData.filter(item=>item.id==id);
    let idList = dataList.map(x=>x.id);
    console.log(idList);
    this.studentApi.delete(JSON.stringify(idList)).subscribe(res=>{
      if (res){
        this.message.success('删除成功！');
        this.loadData();
      }else {
        this.message.error('删除失败！');
      }
    },error => {
      this.message.error('删除失败！');
    });
  }

  deleteStu(){
    let dataList = this.getSelectedArr();
    if (dataList.length == 0){
      this.message.info('请选中要删除的学生');
      return;
    }
    let idList = dataList.map(x=>x.id);
    console.log(idList);

    this.modalService.confirm({
      nzTitle: '确定删除选中学生?',
      nzOnOk: () => {
        this.studentApi.delete(JSON.stringify(idList)).subscribe(res=>{
          if (res){
            this.message.success('删除成功！');
            this.loadData();
          }else {
            this.message.error('删除失败！');
          }
        },error => {
          this.message.error('删除失败！');
        });
      }
    });

  }


  //获取选中的数据 list
  getSelectedArr(){

    let dataList = this.srcData.filter(item=>this.mapOfCheckedId[item.id]);

    return dataList;
  }

}

