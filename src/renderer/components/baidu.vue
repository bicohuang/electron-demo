<template>
<div>
  <button class="alt bg-primary" @click="to('/')">返回</button>
  <a-button type="primary" @click="gets()">创建</a-button>
<!--  <webview src="http://www.baidu.com">-->

<!--  </webview>-->
</div>
</template>

<script>
export default {
  name: "baidu",
  methods:{
    to(data){
      this.$router.push(data)
    }
    ,
    gets(){
      // var sqlite3 = require('sqlite3');
      // debugger
      // var db = new sqlite3.Database('static/sqlite.db',function() {
      //   db.run("create table test(name varchar(15))",function(){
      //     db.run("insert into test values('hello,world')",function(){
      //       db.all("select * from test",function(err,res){
      //         if(!err)
      //           console.log(JSON.stringify(res));
      //         else
      //           console.log(err);
      //       });
      //     })
      //   });
      // });
      var fs = require('fs'); //文件模块
      let f = fs.readFile("static/area_code_2018.json", "utf-8", function(err, data){
        let j = [];
        console.log(data);
        debugger
        let jdata = JSON.parse(data);
        for (let i = 0; i < jdata.length; i++) {
          let item ={
            id:substrFun(jdata[i].code),
            name:jdata[i].name
          }
          j.push(item);
          if(jdata[i].children!=null){
            for (let k = 0; k < jdata[i].children.length; k++) {
              let item ={
                id:substrFun(jdata[i].children[k].code),
                name:jdata[i].children[k].name
              }
              j.push(item);
              if(jdata[i].children[k].children!=null){
                for (let l = 0; l < jdata[i].children[k].children.length; l++) {
                  let item ={
                    id:substrFun(jdata[i].children[k].children[l].code),
                    name:jdata[i].children[k].children[l].name
                  }
                  j.push(item);
                }
              }
            }
          }
        }
        fs.writeFile('static/data.json',JSON.stringify(j),(err) => {
          if (err) {
            console.log(err);
          }
          console.log("JSON data is saved.");
        })
      })
      let substrFun= function (data){
        let result =data.toString().substr(0,6)
        return  parseInt(result);
      }
    }
  }
}
</script>
<style scoped>
  .alt{
    height: 50px;
    width: 100px;
  }
  webview{
    height: 500px;
  }
</style>
