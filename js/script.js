
  var app = new Vue({
    el: '#app',
    data : {
      videoRecharge:null,
      videorandom :null,
       x:null,
        info: null,
        loading: true,
        errored: false,
      images :[]
    },
    methods:{
      
    },

    mounted: function() {
      x = Math.floor((Math.random() * 10) + 1);
      
       var API_KEY = 'https://pixabay.com/api/videos/?key=23204036-69c0429327c4664dc706ccca6&q=yellow+flowers';
      axios
      .get(API_KEY)
      .then((result)=>{
          this.images = result.data.hits;
          
        
        this.videorandom = this.images[x];
        console.log(x)
        console.log(this.videorandom.videos.large.url)
        this.videoRecharge = this.videorandom.videos.large.url
        })
       
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
       
         
    }
  })

