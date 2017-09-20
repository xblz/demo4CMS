export function confirmDialog(context, title, text, successFun, cancelFun) {
  context.$confirm(text, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    if (successFun) successFun()
  }).catch(() => {
    if (cancelFun) cancelFun()
  });
}