let _apiHost = 'http://kf.api-cg.com';
let _siteHost = 'http://dev.cg.com';
let common = {
    timeout: 3 * 1000,  //  心跳检测时长
    debug:true,
    timeoutObj: null, // 定时变量
    wsHost: 'ws://127.0.0.1:9502',
    api: {
        // 修改密码
        resetPwd: _apiHost + '/api/user/reset-pwd',
        // 上报在线状态
        reportOnlineStatus: _apiHost + '/api/user/report-online-status',
        // 消息列表
        messageList: _apiHost + '/api/message/list',
        // 会话列表
        sessionList: _apiHost + '/api/session/list',
        // 游客备注
        remark: _apiHost + '/api/session/remark',
        // 清理会话
        clearSession: _apiHost + '/api/session/clear',
        // 屏蔽
        block: _apiHost + '/api/session/block',
        // 登录
        login: _apiHost + '/api/auth/login',
        // 获取客服资料
        getService: _apiHost + '/api/service',
        getIP: _apiHost + '/api/session/ip',
    },
    pageUrl: {
        loginPage: _siteHost + '/html/ws/pc/light-skin/signin.html',
        resetPassword: _siteHost + '/html/ws/pc/light-skin/reset-password.html',
        chatUrl: _siteHost + '/html/ws/pc/light-skin/chat-1.html',
    },
    imagePath: _siteHost + '/html/ws/',
    staticImagePath: _siteHost + '/html/ws/pic/',
    guestAvatar: _siteHost + '/html/ws/pc/assets/media/avatar/guest.jpeg',
    getcookie: function (objname) {//获取指定名称的cookie的值
        let arr = document.cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split("=");
            if (temp[0] == objname) return unescape(temp[1]);
        }
        return false;
    },
    // 退出
    logout: function () {
        document.cookie = 'user=' + "";
        // 跳转到登录页面
        let loginPage = _siteHost + '/html/ws/pc/light-skin/signin.html';
        alert(loginPage);
        location.href = loginPage;
    },
    getApiToken: function () {
        let userStr = this.getcookie('user');
        if (userStr == false) {
            alert('请先登录');
            // 跳转到登录页面
            // todo
            return;
        }
        let user = JSON.parse(userStr);
        if (!user) {
            alert('请先登录');
            // 跳转到登录页面
            // todo
            return;
        }
        return user.token;
    }
}
