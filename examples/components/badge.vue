<template>
  <div>
    <vu-badge :value="88" class="item">
      评论
    </vu-badge>
    
    <vu-badge :value="200" :max="99" type="danger" class="item">
      消息
    </vu-badge>

    <vu-badge is-dot class="item">
      查询
    </vu-badge>
  </div>
</template>
<style lang="scss" scoped>
  .item {
    margin-right: 20px;
  }
</style>