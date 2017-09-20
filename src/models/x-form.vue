<!--
config 格式字段说明：

  {
    params: [
      {
        type: "input",  // input 输入框；switch 开关；select 选择器；radio 单选框；time 时间选择器；date 日期选择器；datetime 日期时间选择器；checkbox 多选框；textarea 文本框；为空不显示
        param: "name",  // 提交表单时，对应字段
        label: "姓名",  // 提示标题，默认为空，可为空
        placeholder: "请输入姓名",  // 默认提示内容，type为 input、select、date、textarea显示，默认为空，可为空
        onValue: true, // type 为switch 时，状态为开时的数值
        offValue: false, //  type 为switch 时，状态为关时的数值
        option: {start: '00:00', step: '00:10', end: '23:50'}, // type为 time 时，需要传入内容，start 开始时间；step 时间间隔；end 结束时间；注：时间需要为小时加分钟，如12:12；step精确最小为分，end结束时间不能为00:00
        options: [  //  type为 select、radio、checkbox时，需要传入对应选择内容，label 显示文字；value 对应值
          {label: "男", value: "1"},
          {label: "女", value: "0"}
        ],
      }
    ],
    data: {},  // 默认表单数据，默认为空，可为空
    onSubmit(obj) // 点击确认执行函数
    onCancel() // 点击取消执行函数
  }

-->
<template>
  <el-form v-if="submitForm" :model="submitForm" label-width="120px" style="padding: 20px;">

    <template v-for="cols in config.params">
      <el-row>
        <template v-for="model in cols">
          <el-col :span="24 / cols.length">


            <!-- input -->
            <template v-if="model.type == 'input'">
              <el-form-item :label="model.label">
                <el-input v-model="submitForm[model.param]" :placeholder="model.placeholder"></el-input>
              </el-form-item>
            </template>

            <!-- time -->
            <template v-else-if="model.type == 'time'">
              <el-form-item :label="model.label">
                <el-time-select v-model="submitForm[model.param]" :picker-options="model.option" :placeholder="model.placeholder||'选择时间'"
                                style="width: 100%" :editable="false">

                </el-time-select>
              </el-form-item>
            </template>

            <!-- date -->
            <template v-else-if="model.type == 'date'">
              <el-form-item :label="model.label">
                <el-date-picker type="date" v-model="submitForm[model.param]" @change="datePickerFmt(model.param)" :placeholder="model.placeholder||'选择日期'"
                                style="width: 100%" :editable="false">

                </el-date-picker>
                <!--:picker-options="pickerOptions">-->
              </el-form-item>
            </template>

            <!-- datetime -->
            <template v-else-if="model.type == 'datetime'">
              <el-form-item :label="model.label">
                <el-date-picker type="datetime" v-model="submitForm[model.param]" @change="datePickerFmt(model.param)" :placeholder="model.placeholder||'选择日期'"
                                style="width: 100%" :editable="false">

                </el-date-picker>
              </el-form-item>
            </template>

            <!-- switch -->
            <template v-else-if="model.type == 'switch'">
              <el-form-item :label="model.label">
                <el-switch on-text="" off-text="" :on-value="model.onValue" :off-value="model.offValue" v-model="submitForm[model.param]"></el-switch>
              </el-form-item>
            </template>

            <!-- radio -->
            <template v-else-if="model.type == 'radio'">
              <el-form-item :label="model.label">
                <el-radio-group v-model="submitForm[model.param]">
                  <template v-for="option in model.options">
                    <el-radio :label="option.value">{{option.label}}</el-radio>
                  </template>
                </el-radio-group>
              </el-form-item>
            </template>

            <!-- checkbox -->
            <template v-else-if="model.type == 'checkbox'">
              <el-form-item :label="model.label">
                <el-checkbox-group v-model="submitForm[model.param]">
                  <template v-for="option in model.options">
                    <el-checkbox :label="option.value">{{option.label}}</el-checkbox>
                  </template>
                </el-checkbox-group>
              </el-form-item>
            </template>

            <!-- select -->
            <template v-else-if="model.type == 'select'">
              <el-form-item :label="model.label">
                <el-select v-model="submitForm[model.param]" :placeholder="model.placeholder||'请选择'" style="width: 100%">
                  <template v-for="option in model.options">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </template>

            <!-- textarea -->
            <template v-else-if="model.type == 'textarea'">
              <el-form-item :label="model.label">
                <el-input type="textarea" v-model="submitForm[model.param]" :placeholder="model.placeholder"></el-input>
              </el-form-item>
            </template>

          </el-col>
        </template>
      </el-row>
    </template>


    <div style="text-align: center">
      <el-button v-if="config.onCancel" @click="config.onCancel">取消</el-button>

      <el-button type="primary" @click="config.onSubmit(submitForm)">提交</el-button>
    </div>

  </el-form>
</template>

<script>

  export default {
    methods: {
      datePickerFmt(param) {
        if (typeof(this.submitForm[param]) !== "number") {
          this.submitForm[param] = Date.parse(this.submitForm[param]);
        }
      }
    },
    data() {
      const context = this;
      const params = context.config.params;
      var data = {};
      params.map(function (items) {
        items.map(function (item) {
          if (item.type === "checkbox") {
            data[item.param] = context.config.data[item.param] || [];
          } else if (item.type) {
            data[item.param] = context.config.data[item.param] || '';
          }
        })
      });
      return {
        submitForm: data
      }
    },
    props: {
      config: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      "config.data"() {
        const context = this;
        const params = context.config.params;
        var data = {};
        params.map(function (items) {
          items.map(function (item) {
            if (item.type === "checkbox") {
              data[item.param] = context.config.data[item.param] || [];
            } else if (item.type) {
              data[item.param] = context.config.data[item.param] || '';
            }
          })
        });
        context.submitForm = data;
      }
    }
  }

</script>