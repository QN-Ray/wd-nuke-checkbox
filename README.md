以下是标准 README 的内容

# wd-nuke-checkbox

- category: UI
- chinese: 选择框
- type: UI组件

---

## 安装
`npm install wd-nuke-checkbox --save`

## 引用
`import CheckBox from 'wd-nuke-checkbox';`

## API

参数 | 说明 | 类型 | 默认值
-----|-----|-----|-----
checked | 是否选中 | boolen | false
disabled | 是否禁止 | boolen | false
size |  checkbox尺寸：'small', 'medium', 'large' | string | small
onPress | 点击事件 | function| 无
rect | 默认checkbox为圆型，存在这个属性则为正方形 | boolen | false

## 使用事项

在标准定义里，点击checkbox，是会自己更换状态，也就是其内部有自己一个状态。
但是在实际业务场景中，更多的情景是业务方控制是否选中，所以这边是否选中是通过checked参数来判断。
onPress仅仅是事件回调，并不会改变选择状态，这里注意下，具体详见doc里面用法。<!--二维码分隔误删-->
basic.md 

 <img src='http://qr.liantu.com/api.php?&w=200&text=https://h5.m.taobao.com/qn/mobile/weex-tpl.html?_wx_tpl=https://unpkg.com/wd-nuke-checkbox@0.0.2/demo/basic.js' width="150px"/> 

demo bundle使用公用cdn承载，访问速度可能较慢~~