$(function(){var e=$("#username"),t=$("phone"),n=$("#yanzheng"),l=$("#mima"),a=$("#sub"),i=$("#btn");function o(e){var t=$(e),n=$(e+"-valid");if(console.log(e),1==e.indexOf("username")){if(""===t.val())return n.html("用户名不能为空"),void t.select();if(0==/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test(t.val()))return n.html("用户名仅支持中英文、数字和下划线，且不能为纯数字"),void t.select()}if(1==e.indexOf("phone")){if(""===t.val())return n.html("手机号不能为空"),void t.select();if(!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t.val()))return n.html("手机号码格式不正确"),void t.select()}if(1==e.indexOf("mima")){if(""===t.val())return n.html("密码不能为空"),void t.select();if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(t.val()))return n.html("密码设置不符合要求"),void t.select()}return 1==e.indexOf("yanzheng")&&""===t.val()?(console.log(1111),n.html("验证码不能为空"),void t.select()):(n.html(""),1)}a.click(function(){o("#username")&&o("#phone")&&o("#mima")&&o("#")}),i.click(function(){$("#btn").attr("disabled",!0),$("#yanzheng-valid").html("");var e=5,t=setInterval(function(){return""==n.val()&&e<=0?(clearInterval(t),$("#btn").val("获取验证码"),$("#yanzheng-valid").html("请求超时，请稍后再试"),$("#btn").attr("disabled",!1),!1):""!==n.val()&&e<=0?(clearInterval(t),$("#btn").val("获取验证码"),$("#btn").attr("disabled",!1),!1):void(0<=e&&$("#btn").val("发送中"+e--+"s"))},1e3)}),t.focusout(function(){o("#phone")||t.select()}),l.focusout(function(){o("#mima")||l.select()}),e.focusout(function(){o("#username")||e.select()})});