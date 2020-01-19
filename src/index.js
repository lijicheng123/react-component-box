import React,{Fragment} from 'react';
import Input from './input/text-input'
import './styles.css';
import './t.less';
const MyComponent = () => (
    <Fragment>
        <h1 className="test t">Hello from My Component wool cool</h1>
        <Input inputName="mobilePhone" helpText="规则为正常的手机号" label="手机号" placeholder="请输入您的手机号" />
        <Input required={false} inputName="email" helpText="规则为正常的常规邮箱" label="邮箱" placeholder="请输入您的邮箱" />
        <Input inputName="userName" helpText="规则为正常的中文姓名" label="姓名" placeholder="请输入您的姓名" />
    </Fragment>
 
);
export default MyComponent;