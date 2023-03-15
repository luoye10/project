<template>
  <div class="holder">
    <div class="content">
      <SkillSubject></SkillSubject>
      <ComplianceSubject></ComplianceSubject>
      <BusinessSubject></BusinessSubject>
    </div>
  </div>
</template>
<script>
import SkillSubject from './SkillSubject';
import ComplianceSubject from './ComplianceSubject';
import BusinessSubject from './BusinessSubject';
export default {
  components: {
    SkillSubject,
    ComplianceSubject,
    BusinessSubject,
  },
};
</script>
<style lang="less" scoped>
.holder {
  width: 100%;
  height: 708px;
  background: #f7f8fa;
  padding: 20px;
  .content {
    width: 1200px;
    height: 628px;
    display: flex;
    position: relative;
  }
}
</style>
