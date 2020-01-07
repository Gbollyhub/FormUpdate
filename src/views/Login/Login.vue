<template>
    <div>
      <section class="section-login">
                <div class="full-width-row">
                    <div class="col-1-of-2-picture picture-col">
                       <img src="../../assets/uba-logo.svg" alt="" class="brand-logo">
                       <div class="heading">
                        <h1 class="heading__banner-header-text u-margin-bottom-banner-header ">Do more with mobile banking</h1>
                        <p class="heading__banner-sub-text">
                            Our upgraded UBA Mobile Banking app gives you the freedom to bank anywhere and at anytime.
                        </p>
                       </div>
                       <div class="brand-url">
                       <p class="banner-brand-url"> www.ubagroup.com</p> 
                       </div>
                    </div>
                    <div class="col-1-of-2-form form-col">
                            <span class="dots1"></span>
                            <span class="dots2"></span>
                            <span class="dots3"></span>
                            <span class="dots4"></span>
                            <span class="dots5"></span>
                            <span class="dots6"></span>
                            <div class="overlay">
                                    <img src="../../assets/overlay.png" alt="" class="overlay__content">
                                </div>
                                <img src="../../assets/uba-logo2.svg" alt="" class="brand-logo2">
                        <div class="Form-heading u-margin-bottom-medium">
                            <h1 class="Form-heading__header-text ">Welcome Back,</h1>
                            <h2 class="Form-heading__sub-text">
                                Sign in to continue.
                            </h2>
                        </div>
                        <v-form ref="form" @submit.prevent= "Login" class="form">
                        <div class="form__group">
                           <v-text-field
                           :rules="[rules.required, rules.email]"
                           v-model="emailAddress"
                           color= "#e76b6b"
                           label="Email address"
                           outlined
                           clearable
                           class="form__group--control"
                           ></v-text-field>
                        </div>
                        
                        <div class="form__group">
                           <v-text-field
                           :rules="[rules.required]"
                           :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                           v-model="password"
                           :type="show ? 'text' : 'password'"
                           label="Password"
                           color="#e76b6b"
                           outlined
                           class="form__group--control"
                           @click:append="show = !show"
                           ></v-text-field>
                        </div>
                       
                      <router-link class="forgot-password" to="/" > <p>Forgot password?</p></router-link>
                      <br><br>
                         <v-btn style="text-transform:none;font-size:17px;font-weight:700" depressed class="large-block-btn-red" dark height='60' large block  color="#ea2135" type="submit">Sign into your account</v-btn>
                        <center>
                    <router-link class="new-user" to="/register" ><p class="u-margin-top-small">New user? Create account</p></router-link>
                        </center>
                    
                    </v-form>
                    </div>
                </div>  
            </section>
    </div>
</template>


<script src ="./Login.js"></script>

<style src = "../sass/main.scss" lang="scss"></style>