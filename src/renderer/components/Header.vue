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
    methods: {
        to(data) {
            this.$router.push(data)
        }
        ,
        gets() {
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
        }
    }
}
</script>
<style scoped>
.alt {
    height: 50px;
    width: 100px;
}

webview {
    height: 500px;
}
</style>
