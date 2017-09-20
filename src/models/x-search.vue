<!--
  config 格式字段说明：

  {
    params: [ // 搜索模板参数，默认为空，可为空，为空时不显示
      {
        type: "input",  // input 输入框；date 日期选择器；select 选择器；为空不显示
        param: "name",  // 提交表单时，对应字段
        label: "姓名",  // 提示标题，默认为空，可为空
        placeholder: "请输入姓名", // 默认提示内容，默认为空，可为空
        options: [  //  type为 select 时，需要传入对应选择内容，label 显示文字；value 对应值
          {label: "男", value: "1"},
          {label: "女", value: "0"}
        ],
      }
    ],
    onSearch(obj) {}  // 查询按钮点击事件，obj
  }
-->
<template>
  <!-- 筛选功能 -->

  <el-form v-if="config" :inline="true" :model="searchForm" label-width="120px" style="margin-top: 20px;">

    <template v-for="model in config.params">

      <!-- input -->
      <template v-if="model.type == 'input'">
        <el-form-item :label="model.label">
          <el-input v-model="searchForm[model.param]" :placeholder="model.placeholder" style="margin-right: 25px;"></el-input>
        </el-form-item>
      </template>

      <!-- date -->
      <template v-else-if="model.type == 'date'">
        <el-form-item :label="model.label">
          <el-date-picker type="date" v-model="searchForm[model.param]" @change="datePickerFmt(model.param)" :placeholder="model.placeholder||'选择日期'"></el-date-picker>
          <!--:picker-options="pickerOptions">-->
        </el-form-item>
      </template>

      <!-- select -->
      <template v-else-if="model.type == 'select'">
        <el-form-item :label="model.label">
          <el-select v-model="searchForm[model.param]" :placeholder="model.placeholder||'请选择'">
            <div v-for="option in model.options">
              <el-option :label="option.label" :value="option.value"></el-option>
            </div>
          </el-select>
        </el-form-item>
      </template>

    </template>
    <el-form-item label=" ">
      <el-button type="primary" @click="config.onSearch(searchForm)">查询</el-button>
      <el-button @click="searchForm = {}">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>

  import {formatDate} from "./../common/dateUtil"


  export default {
    filters: {
      /* 时间格式化 */
      formatDate(time) {
        var date = new Date(Number(time));
        return formatDate(date, "yyyy-MM-dd hh:mm");
      }
    },
    methods: {
      datePickerFmt(param) {
        if (typeof(this.searchForm[param]) !== "number") {
          this.searchForm[param] = Date.parse(this.searchForm[param]);
        }
      },
    },
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        searchForm: {}, // 搜索表单内容
      }
    },
    props: {
      config: {
        type: Object,
        default() {
          return []
        }
      }
    }
  }

</script>