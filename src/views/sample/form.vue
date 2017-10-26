<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">提交表单</span>
      </div>
      <x-form :config="formConfig"></x-form>
    </div>

    <el-row>
      <el-col :span="10" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>html示例：</span>
          </div>
          <textarea class="code-textarea" rows="2" readonly>
            <x-form :config="formConfig"></x-form>
          </textarea>
        </div>
      </el-col>
      <el-col :span="14" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>script示例：</span>
          </div>
          <textarea class="code-textarea" rows="45" readonly>
            export default {
              data() {
                return {
                  formConfig: {
                    params: [
                      [
                        {type: "switch", param: "switch", label: "开关", onValue: true, offValue: false},
                        {type: "radio", param: "radio", label: "单选框", options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}]},
                        {type: "checkbox", param: "checkbox", label: "多选框", options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}, {label: "选项三", value: "3"}]},
                        {type: "select", param: "select", label: "选择器", placeholder: "请选择内容", multiple: true, options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}, {label: "选项三", value: "3"}]}
                      ],
                      [
                        {type: "input", param: "input", label: "输入框", placeholder: "请输入内容"},
                        {type: "time", param: "time", label: "时间选择器", placeholder: "请选择时间", option: {start: '00:00', step: '00:10', end: '23:50'}},
                        {type: "date", param: "date", label: "日期选择器", placeholder: "请选择日期"},
                        {type: "datetime", param: "datetime", label: "日期时间选择器", placeholder: "请选择具体时间"},
                      ],
                      [
                        {type: "textarea", param: "textarea", label: "文本框", placeholder: "请输入内容"},
                        {},
                      ]
                    ],
                    data: {},
                    //
                    onSubmit(obj) {
                      alert(JSON.stringify(obj))
                    },
                    //
                    onCancel() {
                      alert("取消")
                    }
                  }
                }
              }
            }
          </textarea>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>

    export default {
        data() {
            return {
                formConfig: {
                    params: [
                        [
                            {type: "switch", param: "switch", label: "开关", onValue: true, offValue: false},
                            {type: "radio", param: "radio", label: "单选框", options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}]},
                            {type: "checkbox", param: "checkbox", label: "多选框", options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}, {label: "选项三", value: "3"}]},
                            {type: "select", param: "select", label: "选择器", placeholder: "请选择内容", multiple: true, options: [{label: "选项一", value: "1"}, {label: "选项二", value: "2"}, {label: "选项三", value: "3"}]}
                        ],
                        [
                            {type: "input", param: "input", label: "输入框", placeholder: "请输入内容"},
                            {type: "time", param: "time", label: "时间选择器", placeholder: "请选择时间", option: {start: '00:00', step: '00:10', end: '23:50'}},
                            {type: "date", param: "date", label: "日期选择器", placeholder: "请选择日期"},
                            {type: "datetime", param: "datetime", label: "日期时间选择器", placeholder: "请选择具体时间"},
                        ],
                        [
                            {type: "textarea", param: "textarea", label: "文本框", placeholder: "请输入内容"},
                            {},
                        ]
                    ],
                    data: {},
                    //
                    onSubmit(obj) {
                        alert(JSON.stringify(obj))
                    },
                    //
                    onCancel() {
                        alert("取消")
                    }
                }
            }
        }
    }

</script>