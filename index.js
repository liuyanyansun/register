$(function(){
    var $user=$('#user');
    var $phone=$('#phone');
    var $mima=$('#mima');
    var $yan=$('#yan');
    var $subCal=$('#sub');
    var $btnCal=$('#btn');

    $subCal.click(function(){
        if(!validate("#user")||!validate("#phone")||!validate("#mima")||!validate("#yan")) return;
    });
    $btnCal.click(function(){
        $("#btn").attr("disabled",true);
        $("#yan-valid").html("");
        var time=20;
        var hander=setInterval(function() {
            if (time <= 0 && $yan.val()=='') {
                clearInterval(hander); 
                $("#btn").val("获取验证码");
                $("#yan-valid").html("请求超时，请稍后再试");
                $("#btn").attr("disabled",false);
                return false;
            }
            if (time <= 0 && $yan.val()!=='') {
                clearInterval(hander); 
                $("#btn").val("获取验证码");
                $("#btn").attr("disabled",false);
                return false;
            }
            else {
                if(time>=0){
                    $("#btn").val((time--)+"s");
                }
            }
        }, 1000);
    });
    $phone.focusout(function(){
        if(!validate("#phone")) $phone.select();
    })
    $mima.focusout(function(){
        if(!validate("#mima")) $mima.select();
    })
    $user.focusout(function(){
        if(!validate("#user")) $user.select();
    })

    function validate(a){
        var $data=$(a);
        var $msg=$(a+'-valid');
        console.log(a)
        if(a.indexOf("user")==1){
            if($data.val()===""){
                $msg.html("用户名不能为空");
                $data.select();
                return false
            }
            if(/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test($data.val())==false){
                $msg.html("用户名仅支持中英文、数字和下划线，且不能为纯数字");
                $data.select();
                return false
            }

        }
        if(a.indexOf("phone")==1){
            if($data.val()===""){
                $msg.html("手机号不能为空");
                $data.select();
                return false
            }   
            if(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test($data.val())==false){
                $msg.html("手机号码格式不正确");
                $data.select();
                return false
            }
        }
        if(a.indexOf("mima")==1){
            if($data.val()===""){
                $msg.html("密码不能为空");
                $data.select();
                return false
            }  
            if(/^[a-zA-Z]\w{5,17}$/.test($data.val())==false){
                $msg.html("以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
                $data.select();
                return false
            } 
        }
        if(a.indexOf("yan")==1){
            if($data.val()===""){
                console.log(1111)
                $msg.html("验证码不能为空");
                $data.select();
                return false
            }   
        }
        $msg.html("");
        return true;
    }
})