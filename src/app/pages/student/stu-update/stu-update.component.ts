import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../../component/dynamic-form/question-base';
import {QuestionService} from '../../../component/dynamic-form/question.service';
import {Navigation, Router} from '@angular/router';
import {concatMap, map} from 'rxjs/operators';
import {StudentApi} from '../../../api/student.api';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-stu-update',
  templateUrl: './stu-update.component.html',
  styleUrls: ['./stu-update.component.scss']
})
export class StuUpdateComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private service: QuestionService,
    private router:Router,
    private studentApi:StudentApi,
    private message: NzMessageService,
  ) {
    let data = this.router.getCurrentNavigation().extras.state;
    this.questions$ = service.getQuestions('stuman').pipe(
      map(questions=>service.initQuestionsAns(questions,data))
    );
    console.log(this.questions$);
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
    let colleageid = obj['collegeAndClass'][0];
    let classid = obj['collegeAndClass'][1];
    obj['colleageid'] = colleageid;
    obj['classid'] = classid;
    delete obj['collegeAndClass'];
    console.log(JSON.stringify(obj));
    const msgid = this.message.loading('提交中',{nzDuration:0}).messageId;
    this.studentApi.update(JSON.stringify(obj)).subscribe(res=>{
      this.message.remove(msgid);
      if (res){
        this.message.success('修改成功,即将返回上一页');
        setTimeout(()=>{
          this.onBack();
        },1000);
      }else {
        this.message.error('修改失败');
      }
    },error => {
      this.message.remove(msgid);
      this.message.error('修改失败');
    });

  }

  onBack(){
    history.back();
  }

}
