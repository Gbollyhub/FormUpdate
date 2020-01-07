

 export default {
    data(){
    return{
     show: false,
     firstName: "",
     lastName: "",
     phoneNumber: "",
     homeAddress: "",
     emailAddress: "",
     password:"",
     rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
    }
    }
},
computed: {
  formIsVal () {
    return (
     this.emailAddress &&
     this.password
    )
  }
},
    methods: {
       Register(){
        if(this.$refs.form.validate()){
            alert(`First Name: ${this.firstName}, Last Name: ${this.lastName},Email: ${this.emailAddress}, Password: ${this.password}`);
        }
          }
    },
}


