import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../../../component/dynamic-form/question-base';
import {QuestionService} from '../../../../component/dynamic-form/question.service';
import {Router} from '@angular/router';
import {StudentApi} from '../../../../api/student.api';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-stu-man-form',
  templateUrl: './stu-man-form.component.html',
  styleUrls: ['./stu-man-form.component.scss']
})
export class StuManFormComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    service: QuestionService,
    private router:Router,
    private studentApi:StudentApi,
    private message: NzMessageService,
  ) {
    this.questions$ = service.getQuestions('stuman');
  }

  ngOnInit(): void {
  }

  onSubmit(form): void {
    // tslint:disable-next-line:forin
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    console.log(form.controls);
    console.log(JSON.stringify(form.getRawValue()));
    let obj = JSON.parse(JSON.stringify(form.getRawValue()));
    let collegeid = obj['collegeAndClass'][0];
    let classid = obj['collegeAndClass'][1];
    obj['collegeid'] = collegeid;
    obj['classid'] = classid;
    delete obj['collegeAndClass'];
    console.log(JSON.stringify(obj));
    const msgid = this.message.loading('提交中',{nzDuration:0}).messageId;
    this.studentApi.add(JSON.stringify(obj)).subscribe(res=>{
      this.message.remove(msgid);
      if (res){
        this.message.success('添加成功,即将返回上一页');
        setTimeout(()=>{
          this.onBack();
        },1000);
      }else {
        this.message.error('添加失败');
      }
    },error => {
      this.message.remove(msgid);
      this.message.error('添加失败');
    });

  }

  onBack(){
    history.back();
  }

}
