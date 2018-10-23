// 文本生产pdf
var imgUrl = '';
$(function () {
  /*  var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm', // 默认纸张单位为 in为英寸 mm 毫米
        format: 'dl1'
    });*/
    /*getBase64('../images/0020033014156823_s.jpg',(dataURL)=>{
        var doc = new jsPDF({
            unit: 'mm',
        });
        console.log(doc);
        doc.text(20, 20, 'This is the default font.');
        doc.addImage(dataURL, 'JPEG', 15, 40, 100, 58);
        doc.addHTML()
    });*/



   /* doc.setFont("courier");
    doc.setFontType("normal");
    doc.text(20, 30, 'This is courier normal.');

    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(20, 40, 'This is times italic.');

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(20, 50, 'This is helvetica bold.');

    doc.setFont("courier");
    doc.setFontType("bolditalic");
    doc.text(20, 60, 'This is courier bolditalic.');*/
    // doc.save();
});
// html生成pdf
$(function () {
   /* var doc = new jsPDF({
        unit: 'mm', // 默认纸张单位为 in为英寸 mm 毫米
        format: [58,100]
    });
    var print_content = $('#pringTable');
    var filename = 'hello.pdf';
    doc.addHTML(print_content,0,0,function () {
        doc.output('save',filename);
    })*/
});
// 调用打印机
$(function () {
    /*$('#print1').click(function(){
        window.print();
    });*/
    bdhtml=window.document.body.innerHTML;
    sprnstr="<!--startprint-->"; //开始打印标识字符串有17个字符
    eprnstr="<!--endprint-->"; //结束打印标识字符串
    prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); //从开始打印标识之后的内容
    prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr)); //截取开始标识和结束标识之间的内容
    window.document.body.innerHTML=prnhtml; //把需要打印的指定内容赋给body.innerHTML
    window.print(); //调用浏览器的打印功能打印指定区域
    window.document.body.innerHTML=bdhtml; // 最后还原页面
});
// 把一个站图片转为dataURL
function getBase64(url,callback){
    //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
    var Img = new Image(),
        dataURL='';
    Img.src=url;
    Img.onload=function(){ //要先确保图片完整获取到，这是个异步事件
        var canvas = document.createElement("canvas"), //创建canvas元素
            width=Img.width, //确保canvas的尺寸和图片一样
            height=Img.height;
        canvas.width=width;
        canvas.height=height;
        canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
        dataURL=canvas.toDataURL('image/jpeg'); //转换图片为dataURL
        callback?callback(dataURL):null; //调用回调函数
    };
}