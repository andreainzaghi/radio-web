// var app = new Vue({
//     el: '#app',
//     data: {
     
//       videos: []
   
//     },
//     methods: {
//       mounted: function(){
//         // var randomNumber = Math.floor(Math.random() * 100);
//         // document.getElementById("random_number").innerHTML = randomNumber;

//          var API_KEY = '21824357-188f94b37d0cfe213094797ce';
//         // var link = "https://pixabay.com/api/videos/"+API_KEY+"&q="+encodeURIComponent('red roses');
       
//         axios
//         .get('https://pixabay.com/api/videos/'+API_KEY+'&q=yellow+flowers')
//         .then(response => (this.info = response.data.bpi))
//         this.videos = this.info
//         console.log(this.videos);
       

//     }
    
//     },
//     // mounted: function(){
//     //     // var randomNumber = Math.floor(Math.random() * 100);
//     //     // document.getElementById("random_number").innerHTML = randomNumber;

//     //      var API_KEY = '21824357-188f94b37d0cfe213094797ce';
//     //     // var link = "https://pixabay.com/api/videos/"+API_KEY+"&q="+encodeURIComponent('red roses');
       
//     //     axios
//     //     .get('https://pixabay.com/api/videos/'+API_KEY+'&q=yellow+flowers')
//     //     .then(response => (this.info = response.data.bpi))
//     //     console.log(response.data.bpi)
       

//     // }
    
    
//   })  











  new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },

    mounted () {
      var API_KEY = '21824357-188f94b37d0cfe213094797ce';
      axios
      .get('https://pixabay.com/api/'+API_KEY+'&q=yellow+flowers')
      .then(response => (this.info = response.data.bpi))
     
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })