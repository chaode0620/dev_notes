<template>
    <div class="animate container">
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
    name: 'animate',
    components: { Card }
}
</script>

<style scoped>
    .animate{ padding: 20px 0;}
</style>
