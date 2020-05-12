<template>
    <el-card class="card" shadow="never" :body-style="{ padding: 0 }">
        <div class="preview"></div>
        <div class="info">
            <h4 class="title">组件标题</h4>
            <div class="notes">
                <p>2019-02-10</p>
                <div class="tags"></div>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'card'
}
</script>

<style scoped>
    .card{ margin-bottom: 20px; }
    .card .preview{ height: 180px; overflow: hidden; }
    .card .info>.title,
    .card .info .notes{  padding: 10px 15px;}
    .card .info>.title{
        border-bottom: 1px solid #dcdfe6;
    }
    .card .info .notes{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
    }
    .card .info .tags>.tag{
        display: inline-block;
        font-size: 10px;
        padding: 0px 5px;
        margin-left: 5px;
    }
    .card .info .tags>.tag.vue{ background-color: rgba(79,192,141,.1); color: rgb(79,192,141); }
    .card .info .tags>.tag.react{ background-color: rgba(97,218,251,.1); color: rgb(97,218,251); }
    .card .info .tags>.tag.angular{ background-color: rgba(195,0,47,.1); color: rgb(195,0,47); }
</style>
