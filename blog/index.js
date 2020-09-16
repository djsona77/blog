var str="Blog";

var app = new Vue({
  el: '#app',
  data: {
    msg: 'Ctrl+F',
    show: true
  },
  methods:{
      changeTitle: function(num){
            str="Class"+num;
            console.log(str);
            app.msg=str;
       },
       change: function(url){
            document.getElementById("iframe").src=url;
       }
    }
})

