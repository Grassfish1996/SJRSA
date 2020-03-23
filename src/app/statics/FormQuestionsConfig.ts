export const formQuestionsConfig = {
  scoreman: [
    {
      controlType: 'textbox',
      option: {
        key: 'stuid',
        label: '学号',
        value: '',
        errTip: '请输入学号!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'name',
        label: '姓名',
        value: '',
        errTip: '请输入姓名!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'classid',
        label: '学科号',
        value: '',
        errTip: '请输入姓名!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'name',
        label: '学科名',
        value: '',
        errTip: '请输入学科名!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'score',
        label: '成绩',
        value: '',
        errTip: '请正确输入成绩!',
        order: 1,
        validator : {
          required: true,
          min: 0,
          max: 100,
        }
      }
    },
  ],

  stuman: [
    {
      controlType: 'textbox',
      option: {
        key: 'stuid',
        label: '学号',
        value: '',
        errTip: '请输入学号!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'name',
        label: '姓名',
        value: '',
        errTip: '请输入姓名!',
        order: 2,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'radiogroup',
      option: {
        key: 'sex',
        label: '性别',
        value: '0',
        order: 3,
        options: [
          {key: '0', value: '男'},
          {key: '1', value: '女'},
        ],
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'datepicker',
      option: {
        key: 'birthday',
        label: '出生日期',
        value: '',
        errTip: '请输入出生日期!',
        order: 4,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'email',
        label: '邮箱',
        type: 'email',
        errTip: '请输入邮箱!',
        order: 5,
        validator : {
          required: true,
          email: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'phoneNumber',
        label: '手机号',
        errTip: '请输入正确的手机号!',
        order: 5,
        validator : {
          required: true,
          pattern: '^1[3456789]\\d{9}$',
        }
      }
    },
    {
      controlType: 'cascader',
      option: {
        key: 'class',
        label: '学院班级',
        value: '',
        order: 6,
        options: [
          {
            value: '0001',
            label: '计算机学院',
            children: [
              {
                value: 'rj1401',
                label: '软件1401',
                isLeaf: true
              },
              {
                value: 'rj1402',
                label: '软件1402',
                isLeaf: true
              },
              {
                value: 'rj1403',
                label: '软件1403',
                isLeaf: true
              },
            ]
          },
          {
            value: '0002',
            label: '外国语学院',
            children: [
              {
                value: 'yy1401',
                label: '英语1401',
                isLeaf: true
              },
              {
                value: 'yy1402',
                label: '英语1402',
                isLeaf: true
              },
              {
                value: 'yy1403',
                label: '英语1403',
                isLeaf: true
              },
            ]
          },
        ],
        validator : {
          required: true,
        }
      }
    },
  ],
  classman: [
    {
      controlType: 'textbox',
      option: {
        key: 'classid',
        label: '学科号',
        value: '',
        errTip: '请输入学科号!',
        order: 1,
        validator : {
          required: true,
        }
      }
    },
    {
      controlType: 'textbox',
      option: {
        key: 'classname',
        label: '学科名称',
        value: '',
        errTip: '请输入学科名称!',
        order: 2,
        validator : {
          required: true,
        }
      }
    },
  ],

};
