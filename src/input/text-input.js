import React from "react";
import "./text-input.css";
import {inputConfig} from './input-util'
/**
 * 
 * @param {object} 
 * {
 *   type = "text" 类型
 *   label 标签
 *   placeholder 提示
 *   value 默认值
 *   onChange 监听改变回调
 *   helpText,
 *   inputName 输入框名称
 *   maxLength 输入框长度
 *    className
 * require 默认为true
 * }
*/
const TextInput = (options) => {
  const data = inputConfig(options.inputName)

  const {
    type,
    placeholder,
    value,
    onChange,
    className,
    maxLength,
    r
  } = data
  const required = data.required === false ? false : true
  const label = options.label ||data.label
  const reg = options.reg ||data.reg
  console.log('data:',data)
  return (
    <div className="input-wrap">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        maxLength={maxLength}
        className={`input ${className}`}
        value={value}
        onChange={e => {
          let newValue = e.target.value
          onChange && onChange(newValue)
          console.log('newValue:',newValue)
          const ok = new RegExp(reg).test(newValue)
          
          if(!ok){
            console.log('正则匹配规则不匹配:',reg,newValue)
          }else{
            console.log('正则匹配成功:',reg,newValue)
          }
          if(required && newValue === ''){
            console.log('不能为空')
          }
        }}
        placeholder={placeholder}
      />
    </div>
  )
};

export default TextInput;
