<template>
  <div v-if="config" style="padding: 20px;">
    <template v-for="cols in config.params">
      <el-row>
        <template v-for="col in cols">
          <el-col :span="24 / cols.length">
            <div class="grid-content">
              <span class="content-label">{{col.label}}</span>
              <span class="content-text">{{config.data[col.param]}}</span>
            </div>
          </el-col>
        </template>
      </el-row>
    </template>
  </div>
</template>

<script>


  export default {
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