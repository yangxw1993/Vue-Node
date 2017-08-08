/**
 * Created by Administrator on 2017/5/14 0014.
 */
let data=[
    {name:'老客',plan:'本月计划',actual:'本月实际'},
    {name:'人群量',plan:3000,actual:3000},
    {name:'消耗',plan:9000,actual:74500},
    {name:'CPM',plan:89,actual:230},
    {name:'曝光量',plan:25000,actual:78900},
    {name:'人均曝光次数',plan:3.8,actual:2.7},
    {name:'消耗占比',plan:'',actual:''},

];
let vm=new Vue({
    el:'#app',
    data:{
        msg:data
    }
});