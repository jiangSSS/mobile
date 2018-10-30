<template>
    <div>
        <Header></Header>
        <div class="img">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="submit">
            <mt-button type="danger" >提交审核</mt-button>
        </div>
        
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
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }   
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border: 1px solid #888;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .img{
        display: flex;
        justify-content: center;
        margin-top: 2rem;

    }
    .submit{
        text-align: center; 
    }
    el-button{
        width: 4rem;
    }
</style>