<template>
    <div>
        <Header></Header>
        <div class="tips">评议须知</div>
        <div class="content">
            <div class="desc">在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</div>
            <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
            <p>2、参加“两学一做”学习教育情况；</p>
            <p>3、参加党的组织生活、按要求交纳党费；</p>
            <p>4、学习情况、业务能力提高情况；</p>
            <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
            <p>6、联系群众、关心群众、服务群众情况；</p>
            <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
        </div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item >
                <el-select placeholder="请选择">
                    <el-option label="信息工程学院教职工第一党支部" value="shanghai"></el-option>
                    <el-option label="信息工程学院教职工第二党支部" value="shanghai"></el-option>
                    <el-option label="信息工程学院学生党支部" value="shanghai"></el-option>
                    <el-option label="信息工程学院学生流动党支部(北京)" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">下一步</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Header
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            getdata() {
                this.$axios.get("/nationComment/getComment.do").then(res => {
                    this.data = res.content
                })
            }
        },
        created() {
            this.getdata()
        }
    }   
</script>

<style scoped lang="scss">
    .tips {
        font-size: 16px;
        text-align: center;
        margin: 0.4rem;
        color: #666;
    }

    .content {
        font-size: 14px;
        color: #666;

        .desc {
            margin: 0.2rem;
            line-height: 2;

        }

        p {
            margin: 0.2rem;
        }
    }
</style>