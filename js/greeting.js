let userName = '';

const initGreeting = () => {
    console.log('init greeting')
    const loginName = localStorage.getItem('todotoday_login');
    if (loginName == null) {
        setLoginForm();
        showQuote();
        hideTodo();
    } else {
        userName = loginName;
        setUserInfo(loginName);
        setTodoToday(loginName);
        hideQuote();
        showTodo();
    }
    loginHandleEvent();
}

const setLoginForm = () => {
    document.querySelector('#inputLogin').value = '';
    document.querySelector('.login .before-login').classList.remove('hidden');
    document.querySelector('.login .after-login').classList.add('hidden');
}

const setUserInfo = (loginName) => {
    document.querySelector('#txtLogin').innerText = `Hello ${loginName}`;
    document.querySelector('.login .before-login').classList.add('hidden');
    document.querySelector('.login .after-login').classList.remove('hidden');
    userName = loginName;
}

const loginHandleEvent = () => {
    const $inputLogin = document.querySelector('#inputLogin');
    const $btnLogin = document.querySelector('#btnLogin');
    const $btnLogout = document.querySelector('#btnLogout');

    $btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        const loginName = $inputLogin.value.trim();
        if (!loginName) { return false; }

        localStorage.setItem('todotoday_login', loginName);
        setUserInfo(loginName);

        setTodoToday(loginName);

        hideQuote();
        showTodo();
    })

    $btnLogout.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.removeItem('todotoday_login');
        setLoginForm();

        // remove info
        userName = '';
        setTodoEmpty();
        
        showQuote();
        hideTodo();

        
    })
}


initGreeting();
