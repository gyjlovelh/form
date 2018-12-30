```
npm install @hibiscus/form
```
#### 📦 使用
```typescrip
import {FormModule} from '@hibiscus/form';  

@NgModule({
    imports: [
        ...
        FormModule
    ]
})
export class UserModule {}

```
---
#### 🎨 概述
> 基于angular6 和 ng-zorro-antd对表单的二次封装，简化表单配置书写，提供常用的模板和验证规则，目的是减少DOM的重复书写，将以往对Form的dom配置放在ts中完成，增强代码的可读性。

> 并且提供HsFormControlTemplate、HsFormLabelTEmplate等指令保证扩展性。
---
#### 🔨 API

- [x] **🆖HsFormComponent**

参数 | 描述 | 类型 | 默认值
---|---|---|---
==[rules]== | form的全部配置 | HsFormGroup | null
==[data]== | 表单数据 | any | null

**🆖HsFormControl**

> **field**: ==string== 
- [x] 字段名
> **label**: ==string==

> **type**: ==controlType== 
- [x] control模板类型，hs-form提供部分常用模板，配合hsFormControlTemplate传入自定义模板

> **extra**: ==string== 
- [x] 额外信息（简单文本）

> **readonly**: ==boolean== 
- [x] 当前control是否为只读

> **visiable**: ==visiableType== 
- [x] control的可见的场景，默认在查看和修改模式下都可见

```
const control = new HsFormControl();
control.label = '密码';
control.visiable = 'modify';
```

> **transform**: ==Function== 
- [x] 当readonly为true时，此函数保证文本的正确显示。
```
const control = new HsFormControl();
control.type = 'date';
control.transform = date => {
    return format(date, 'yyyy/MM/dd HH:mm:ss');
};
```





---
