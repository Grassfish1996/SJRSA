import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {classidMap, collegeidMap, sexMap} from '../../../statics/CollegeAndClass';
import {ScoreApi} from '../../../api/score.api';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../../component/dynamic-form/question-base';
import {FormGroup} from '@angular/forms';
import {QuestionService} from '../../../component/dynamic-form/question.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData = [];
  listOfAllData = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  srcData = [];

  thlist = [
    {
      label: '学号',
      key: 'stuid',
    },
    {
      label: '姓名',
      key: 'stuname',
    },
    {
      label: '学科号',
      key: 'courseid',
    },
    {
      label: '学科',
      key: 'coursename',
    },
    {
      label: '成绩',
      key: 'score',
    },
  ];


  isVisible = false;
  modelTitle = '';
  questions$: Observable<QuestionBase<any>[]>;
  form: FormGroup;

  modelOkFun;

  subjectList = [];
  stuList = [];

  constructor(
    private service: QuestionService,
    private studentApi: ScoreApi,
    private subjectApi: ScoreApi,
    private scoreApi: ScoreApi,
    private message: NzMessageService,
    private modalService: NzModalService,
    private router:Router,
  ) {
    this.questions$ = service.getQuestions('subjectman');
    console.log(this.questions$);
  }

  currentPageDataChange($event): void {
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
    this.scoreApi.list().pipe(
      map(data=>this.dataConvert(data))
    ).subscribe(res=>{
      if(res){
        this.listOfAllData = res;
      }
    });
  }

  initOptionList(){
    this.studentApi.list();
    this.studentApi.list();
  }

  //字典信息转化
  dataConvert(dataList){
    this.srcData = JSON.parse(JSON.stringify(dataList));
    console.log('srcdata=>',this.srcData);

    return dataList;
  }

  add(){
    this.showModal('添加学科信息');
    this.form.reset();
    this.modelOkFun = this.doAdd;
  }

  doAdd(){
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (!this.form.valid){
      return;
    }

    let obj = JSON.parse(JSON.stringify(this.form.getRawValue()));

    this.scoreApi.add(obj).subscribe(res=>{
      if (res){
        this.message.success('添加成功!');
        this.loadData();
        this.isVisible = false;
      }else {
        this.message.error('添加失败');
      }
    },error => {
      this.message.error('添加失败');
    });
  }

  updateOne(id){
    let data = this.srcData.filter(item=>item.id==id)[0];
    console.log(data);
    this.showModal('修改学科信息');
    this.modelOkFun = this.doUpdate;
    this.service.initFormValues(this.form,data);
  }

  doUpdate(){
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (!this.form.valid){
      return;
    }
    let obj = JSON.parse(JSON.stringify(this.form.getRawValue()));

    this.scoreApi.update(obj).subscribe(res=>{
      if (res){
        this.message.success('修改成功!');
        this.loadData();
        this.isVisible = false;
      }else {
        this.message.error('修改失败');
      }
    },error => {
      this.message.error('修改失败');
    });
  }

  deleteOne(id){
    let dataList = this.srcData.filter(item=>item.id==id);
    let idList = dataList.map(x=>x.id);
    console.log(idList);
    this.scoreApi.delete(JSON.stringify(idList)).subscribe(res=>{
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

  delete(){
    let dataList = this.getSelectedArr();
    if (dataList.length == 0){
      this.message.info('请选中要删除的成绩');
      return;
    }
    let idList = dataList.map(x=>x.id);
    console.log(idList);

    this.modalService.confirm({
      nzTitle: '确定删除选中成绩?',
      nzOnOk: () => {
        this.scoreApi.delete(JSON.stringify(idList)).subscribe(res=>{
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

  showModal(title): void {
    this.isVisible = true;
    this.modelTitle = title;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (!this.form.valid){
      return;
    }
    this.isVisible = false;
    let obj = JSON.parse(JSON.stringify(this.form.getRawValue()));

    this.scoreApi.add(obj).subscribe(res=>{
      if (res){
        this.message.success('添加成功!');
        this.isVisible = false;
      }else {
        this.message.error('添加失败');
      }
    },error => {
      this.message.error('添加失败');
    });
  }

  handleCancel(): void {

    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getForm(form){
    this.form = form;
  }

}
