- 模板引擎(01)
  引入库文件
  准备模板
  拼接

- 验证邮箱地址的唯一性(02)
  失去焦点触发失去焦点事件
  验证邮箱格式
  ajax向服务器发送请求验证邮箱的唯一性

- 搜索框内容自动提示(03)
  添加用户输入事件
  获取用户输入的关键字
  向服务器发送请求(携带关键字)
  将响应数据显示在搜索框底部

- 省市区三级联动(04)
  通过接口获取省份信息
  使用js获取到省市区下拉框元素
  将服务器端返回的省份信息显示在下拉框中
  为下拉框添加表单值改变事件
  当选择省份时，根据省份id获取城市信息
  当选择城市时，。。。

- FormData 对象
  1. 模拟html表单(05)
  2. 异步上传二进制文件(07)
  - 实例方法(06)
        get('key') 获取表单对象属性的值
        set('key', 'value') 设置表单对象属性的值
        delete('key') 删除表单对象中属性的值
        append('key', 'value') 向表单对象追加值
        set append的区别:
          在属性名已经存在的情况下，set会覆盖，append会保留俩个值