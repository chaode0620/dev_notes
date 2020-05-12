<template>
    <div class="header">
        <div class="container">
            <el-row type="flex" align="middle">
                <el-col :span="16">
                    <el-row type="flex" align="middle">
                        <el-col :span="8">
                            <h3>vue 功能组件库</h3>
                        </el-col>
                        <el-divider direction="vertical"></el-divider>
                        <el-col :span="16">
                            <ul class="nav">
                                <li
                                    v-for="item in navs"
                                    :key="item.path"
                                    :class="{ 'hover': $route.path === item.path }"
                                    @click="$router.push(item.path)"
                                >{{ item.title }}</li>
                            </ul>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data: () => ({
        navs: [
            { title: '网站首页', path: '/home' },
            { title: '组件库', path: '/component' },
            { title: '动画库', path: '/animate' }
        ]
    })
}
</script>

<style scoped>
    .header{
        height: 80px;
        background-color: #fff;
        box-shadow: 0 2px 8px #f0f1f2;
    }
    .nav{
        height: 80px;
        display: flex;
        align-items: center;
        font-weight: 500;
    }
    .nav>li{
        margin: 0 20px;
        cursor: pointer;
        transition: all .2s
    }
    .nav>li:hover,.nav>li.hover{ color: var(--primary); }
</style>
