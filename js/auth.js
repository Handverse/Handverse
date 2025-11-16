// Função para login do usuário
function signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            console.log("Login bem-sucedido", userCredential.user);
            // Redireciona para a home após login bem-sucedido
            window.location.href = './page/home.html'; // Redireciona para a página home
        })
        .catch(function (error) {
            console.log('Erro ao fazer login: ', error.message);
            alert('Erro no login: sua senha ou email podem estar incorretos'); // Mostra um alerta se o login falhar
        });
}

// Função para cadastro do usuário
function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            console.log("Cadastro bem-sucedido", userCredential.user);
            // Após cadastro, redireciona para a página de login (formLogin.html)
            window.location.href = '../formLogin.html'; // Redireciona para o login
        })
        .catch(function (error) {
            console.log('Erro ao fazer cadastro: ', error.message);
            alert('Erro no cadastro: ' + error.message); // Mostra um alerta se o cadastro falhar
        });
}

// Evento de envio do formulário de login ou cadastro
const authForm = document.getElementById('authForm');

// Verifica se o formulário foi enviado
authForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário ao servidor

    const email = authForm.email.value;
    const password = authForm.password.value;

    // Verifica se o botão de envio é "Entrar" ou "Cadastrar" para decidir qual ação tomar
    if (authForm.submitAuthForm.innerHTML === 'Entrar') {
        signIn(email, password); // Chama a função de login
    } else {
        signUp(email, password); // Chama a função de cadastro
    }
});


// Função para monitorar o estado de autenticação do usuário
firebase.auth().onAuthStateChanged(function (user) {
    // Verifica se o usuário está autenticado
    if (user) {
        // Se o usuário está logado, ele não deve acessar as páginas de login, cadastro ou index
        if (window.location.pathname.endsWith('ogin') ||
            window.location.pathname.endsWith('adastro')) {
            // Redireciona para a home se o usuário já estiver logado
            window.location.href = "./page/home.html"; // Redireciona para a home
        }
    } else {
        // Se o usuário não está logado, ele deve ser redirecionado para o login se tentar acessar a home
        if (window.location.pathname.endsWith("page/home.html")) {
            // Redireciona para a página de login se não estiver autenticado
            window.location.href = "formLogin.html"; // Redireciona para o login
        }
    }
});


// Função para deslogar o usuário
function signOut() {
    // Tenta fazer o logout do Firebase
    firebase.auth().signOut().then(function () {
        console.log('Deslogado com sucesso');
        // Redireciona para a página de login após o logout
        window.location.href = "../formLogin.html"; // Ou use um caminho absoluto, se necessário
    }).catch(function (error) {
        // Caso ocorra um erro durante o logout, exibe o erro no console
        console.error('Erro ao deslogar: ', error.message);
    });
}