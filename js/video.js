
// var app = new Vue({
//     el: '#app',
    
//     data : {
//       videoRecharge1:null,
//       videorandom1 :null,
      
//       info: null,
//       loading: true,
//       errored: false,
//       videos :[],
//       y:[1,2,3,4,5,6,7,8,9,10],
//       arrayvideo:[]
//     },
  
//     methods:{
  
//     },
  
//     mounted: function() {
     
//       for (let i = 1; i < this.y.length; i++) {
//         var API_KEY = 'https://pixabay.com/api/videos/?key=23204036-69c0429327c4664dc706ccca6&q=yellow+flowers&profile_id='+ i;
//         this.arrayvideo.push(API_KEY);
//       }
  
     
//       axios
//       .get(API_KEY)
//       .then((result)=>{
//         this.videos = result.data.hits;
//         this.videorandom1 = this.videos[x];
//         // console.log(x)
//         // console.log(this.videorandom.videos.large.url)
//         this.videoRecharge1 = this.videorandom1.videos.large.url
//         console.log(this.videoRecharge1)
//       })
    
  
//       .catch(error => {
//         console.log(error)
//         this.errored = true
//       })
  
//       .finally(() => this.loading = false)
  
  
//     }
//   })
  