let nome = []
let senha = []
let index = []

function cadastrar(){
    nome = prompt('digite seu nome para cadastro')
    senha = prompt('digite uma senha para cadastro')
}

function fazerLogin(nome,senha){
    for (let index = 0; index < nome.length; index++) {
        if (nome == nome[index] && senha == senha[index]) {
            return true
        }else 
        return false
    }
}

function oQueFazer(){
    let fazer = parseInt(prompt('O que deseja fazer? 1-cadastrar; 2-fazer login; 3-excluir um cadastro; 4-encerrar programa'))
    return fazer
}

do {switch (fazer) {
        case "1":
            cadastrar()  
            oQueFazer()
            break;
        case "2":
            fazerLogin(nome,senha)  
            if (true) {
                console.log('login feito com sucesso')
            }else if (false) {
                console.log ('usuario ou senha incorrretos')
            }
            oQueFazer()
            break;
        case "3":
            excluirCadastro()   
            oQueFazer()
            break;
        case "4":
            continuar = 'n'
            break;
        default:
        console.log('essa opcao nao existe')    
        break;
    }
} while (continuar == 's');

//indexof slice