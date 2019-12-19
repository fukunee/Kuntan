<template>
    <div id="authContainer">
        <a-row>
            <a-col :span="8" :order="1">
                <a-button id="buttonCanStart" :disabled="canStart">Start Game</a-button>
            </a-col>
            <a-col :span="16" :order="2">
                <a-form id="loginForm" :form="form" class="login-form" @submit="loginSubmit">
                    <a-row>
                        <a-col :span="16" style="padding-top:9px">
                            <a-form-item>
                                <a-input
                                        v-decorator="[ 'userName',{ rules: [{ required: true, message: ' ' }] },]"
                                        placeholder="Username" size="small">
                                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-input
                                        v-decorator="['password',{ rules: [{ required: true,message:' ' }] }]"
                                        type="password" placeholder="Password"
                                        size="small">
                                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item>
                                <a-button id="buttonLogin" v-on:click="setAction(0)" type="primary" html-type="submit"
                                          class="login-form-button">
                                    Login
                                </a-button>
                            </a-form-item>
                            <a-button id="buttonRegister" v-on:click="setAction(1)" type="primary" html-type="submit"
                                      class="login-form-button">
                                Register
                            </a-button>
                        </a-col>
                    </a-row>
                </a-form>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    export default {
        name: "Auth",
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'normal_login'});
        },
        data() {
            return {
                action: '0'
            }
        },
        computed: {
            canStart() {
                return this.$store.state.auth.authState !== 1;
            }
        }
        ,
        methods: {
            setAction(v) {
                this.action = v;
            },
            loginSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        if (this.action === 0) {
                            console.log('login', values);
                        } else {
                            console.log('register', values);
                        }
                    }
                })
            }
        }
    }
</script>
<style>
    #authContainer {
        float: right;
        width: 360px;
    }

    #buttonCanStart {
        height: 39px;
        vertical-align: top;
        border-radius: 0;
        width: 98%;
        margin: 11px 0 0 0;
    }

    #loginForm {
    }

    #loginForm input {
        border-radius: 0;
        height: 20px;
        border: 1px solid #000000;
    }

    #loginForm .ant-form-item {
        margin-bottom: 0;
    }

    #loginForm .ant-form-item-control {
        line-height: 20px;
    }

    #loginInputUsername {
        margin-top: 10px;
    }

    .login-form-button {
        font-size: 8px;
        height: 21.5px;
        vertical-align: top;
        border-radius: 0;
        width: 100%;
        border: 1px solid #000000;
    }

    #buttonLogin {
        margin-top: 8px;
    }

    #buttonRegister {
        margin-top: 1px;
    }

    .ant-form-explain {
        position: absolute;
        width: 99%;
        background: red;
        top: 20px;
        left: 1px;
        font-size: 8px;
        min-height: 2px !important;
        height: 2px;
        padding: 0 3px;
        transition: none;
        color: transparent;
    }
</style>
