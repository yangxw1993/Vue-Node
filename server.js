var express=require('express');
var server=express();
var users={
    'qwe':'qwe',
    'zhangsan':'qaz'
};
server.use(express.static('www'));
server.use('/a.html',function (req,res) {
    res.send('abc');
});

server.get('/login',function (req,res) {
    var user=req.query['username'];
    var psw=req.query['psw'];

    if(users[user]==null){
        res.send({
            status:0,
            msg:'此用户不存在'
        })
    }else {
        if(users[user]!=psw){
            res.send({
                status:0,
                msg:'密码或用户名错误'
            })
        }else{
            res.send({
                status:1,
                msg:'成功'
            })
        }
    }
});
server.listen(8080);