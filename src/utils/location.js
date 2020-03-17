//锚点跳转
function goAnchor(selector) {
    var anchor = this.$el.querySelector(selector);//获取元素
    if(anchor) {
    	setTimeout(()=>{//页面没有渲染完成时是无法滚动的，因此设置延迟
    		anchor.scrollIntoView(); //js的内置方法，可滚动视图位置至元素位置
    	},500);
    } 
};
//获取参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
 
export {
	goAnchor,
	GetQueryString
}