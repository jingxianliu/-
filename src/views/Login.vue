<template>
    <div class="content">
        <el-container>
        
          <el-main>
              <div class="login-box">
                <div  class="login-form">    
                  <el-form :label-position="labelPosition" label-width="80px" ref="loginForm" :model="loginForm" :rules="rules" >
                      <el-form-item :label="$t('text.userName')" prop="username">
                        <el-input v-model="loginForm.username" auto-complete="off" ></el-input>
                      </el-form-item>
                      <el-form-item :label="$t('text.password')" prop="password">
                        <el-input v-model="loginForm.password" auto-complete="off" ></el-input>
                      </el-form-item>
                    
                      <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')">{{$t('btn.login')}}</el-button>
                        <el-button @click="resetForm('loginForm')">{{$t('btn.reset')}}</el-button>
                      </el-form-item>
                    
                    </el-form>  
                </div>   
              </div>  
          </el-main>
        
          <!-- <el-footer>
              <el-select v-model="lang_value"  @change="changeLanguage">
                  <el-option
                    v-for="item in languageArr"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
          </el-footer> -->
        </el-container>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import qs from 'qs'
export default {
   data() {
      return {
        labelPosition: 'right',
        loginForm: {
          username: '',
          password: '',
        },
         rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message:  '请输入密码', trigger: 'blur' }
          ]        
        },
        languageArr:[{label:"中文",value:"zh"},{label:"English",value:"en"}],
        lang_value:'中文',
      };
    },
   computed:{

    ...mapState({  
         language:state=>state.language                                                 
      }),

  },

    methods: {
      ...mapMutations([
        'setLoginName',
        'setTOKEN',
      ]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$post('http://localhost:3000/api/user/login',this.loginForm).then((res) => {
            //   if(res.data.status !== 'Y'){
            //        this.$message.error(res.data.message )
            //   }else{
            //     this.setLoginName(this.loginForm.username)
            //     this.setTOKEN(res.data.token)
            //     this.$router.push({ path: '/home' })
            //   }           
            // });

            // this.$post('http://localhost:3000/api/user/add',this.loginForm).then((res) => {
            //   if(res.data.status === 'N'){
            //        this.$message.error(res.data.message )
            //   }else{
            //       this.$message.sucsess('添加成功')
                
            //   }
              
            // });

            
            // this.$API_IOT.login(this.loginForm).then((res) => {
            //    console.log(res)
            //    if(res.data.status === 'N'){
            //       this.$alert(this.$t('text.login_err_txt'), this.$t('text.system_tips'), {
            //          confirmButtonText: this.$t('btn.sure')
            //       })
            //       return false;
            //    }else{
            //       this.setLoginName(this.loginForm.username)
            //       this.setTOKEN(res.data.token)
            //       this.$router.push({ path: '/home' })
            //    }
               
            // })

               this.setLoginName(this.loginForm.username)
               this.setTOKEN("res.data.token")
               this.$router.push({ path: '/home' })
                       
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();

        this.test1()
      },

      changeLanguage(value){
         this.$i18n.locale = value      
          if (value === 'en') {          
            this.rules.username[0].message = '请输入用户名'
            this.rules.username[1].message = '长度在 3 到 5 个字符'
            this.rules.password[0].message = '请输入密码'
          } else {
             this.rules.username[0].message = 'please enter the username'
             this.rules.username[1].message = 'length must betwwen 3 and 5'
             this.rules.password[0].message = 'please enter the password'

          }
     },
     test1(){
       this.$put('http://localhost:3000/api/user/delete/2',{}).then((res) => {
          if(res.data.status === 'N'){
                this.$message.error(res.data.message )
          }else{
            this.setLoginName(this.loginForm.username)
            this.$router.push({ path: '/home' })
          }
          
        });
     },
      test2(){
       this.$delete('http://localhost:3000/api/user/delete/3',{}).then((res) => {
          if(res.data.status === 'N'){
                this.$message.error(res.data.message )
          }else{
            this.setLoginName(this.loginForm.username)
            this.$router.push({ path: '/home' })
          }
          
        });
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .login-box{
        display: flex;
        align-items: center;
        justify-content: center; 
        height: calc(100vh - 145px);
  }
  .login-form{
    width: 400px;
    padding: 40px 50px 30px 30px;
    border-radius: 30px;
    /* background-image: url(../assets/login-box.png);
    background-repeat: no-repeat;
    background-size: cover; */
    background-color: #fff;
  }
  el-form{
      margin-right: 30px;
      margin-top: 30px
  }

  .el-form-item:last-child{margin-bottom: 0px;}

  .content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    bottom: 0;
    right: 0;
    margin: auto;
    background-image: url(../assets/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }


</style>
