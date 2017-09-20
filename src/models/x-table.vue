<!--
  config 格式字段说明：

  {
    params: [ // 表格模板，默认为空，可为空，为空时不显示，不建议为空。。。
      {
        label: "地址",  // 表格title，默认为空，可为空
        prop: "address",  // 列表数据取值字段，默认为空，可为空
        type: "",  // switch 开关；date 日期；button 操作按钮； 默认为空，可为空，为空时显示文字
        adapter:{0:"成功", 1:"失败"},  // type 为 空 或者 button 时，显示文字可根据传入对象显示内容
        buttons: [  // type 为 button 时，扩展按钮
          {text: "修改", action(index, obj) {}},  // text 按钮文字,可为空，为空时显示 prop 值； action 点击操作执行函数，index 对应数据位置；obj 对应数据内容
          {text: "删除", action(index, obj) {}}
        ]
      }
    ],
    data: []  // 表格内数据
  }
-->
<template>
  <!-- 表格功能-->

  <el-table v-if="config" :data="config.data">
    <template v-if="config.expandParams">
      <el-table-column type="expand" header-align="center" align="center">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">

            <template v-for="table in config.expandParams">
              <el-form-item :label="table.label">
                <span>{{ props.row[table.prop] }}</span>
              </el-form-item>
            </template>

          </el-form>
        </template>
      </el-table-column>
    </template>

    <template v-for="table in config.params">
      <el-table-column :label="table.label" :width="table.width" header-align="center" align="center">
        <template scope="scope">

          <!-- 按钮 -->
          <template v-if="table.type == 'button'">
            <template v-for="button in table.buttons">
              <el-button type="text" @click="button.action(scope.$index, scope.row)">{{button.text || (table.adapter ? table.adapter[scope.row[table.prop]] : scope.row[table.prop])}}</el-button>
            </template>
          </template>

          <!-- 日期 -->
          <template v-else-if="table.type == 'date'">
            <span>{{scope.row[table.prop] | formatDate}}</span>
          </template>

          <!-- 选择器 -->
          <template v-else-if="table.type == 'switch'">
            <el-switch on-text="" off-text="" v-model="scope.row[table.prop]" :on-value="1" :off-value="0"></el-switch>
          </template>

          <!-- 默认 文字-->
          <template v-else="">
            <span>{{table.adapter ? table.adapter[scope.row[table.prop]] : scope.row[table.prop]}}</span>
          </template>

        </template>
      </el-table-column>
    </template>
  </el-table>
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
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
      }
    },
    props: {
      config: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }

</script>