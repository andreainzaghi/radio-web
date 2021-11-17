
  var app = new Vue({
    el: '#app',
    data : {
        message:'ciao',
        info: null,
        loading: true,
        errored: false,
      images :[]
    },
    methods:{

    },

    mounted: function() {
      // var API_KEY = '23204036-69c0429327c4664dc706ccca6';
      axios
      .get('https://pixabay.com/api/videos/?key=23204036-69c0429327c4664dc706ccca6&q=yellow+flowers')
      .then((result)=>{
          this.images = result.data.hits;
         
        })
       
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
        console.log(this.images)
    }
  })

