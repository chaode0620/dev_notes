<template>
    <div class="component container">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in 1" :key="item">
                <card></card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Card from '@/components/card'
export default {
    name: 'component',
    components: { Card }
}
</script>

<style scoped>
    .component{ padding: 20px 0;}
</style>
