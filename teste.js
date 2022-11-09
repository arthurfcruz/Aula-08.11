let nomes = []
let senhas = []
let posicao

function cadastrar(){
    nomes.push(prompt('digite seu nome para cadastro'))
    senhas.push(prompt('digite uma senha para cadastro'))
}

function fazerLogin(nome,senha){
    for (let index = 0; index < nomes.length; index++) {
        if (nome == nomes[index] && senha == senhas[index]) {
            return true
        }else 
        return false
    }
}

function excluirCadastro(nomeExcluido){
   posicao = nomes.indexOf(nomeExcluido)
   nomes.splice(posicao,1)
   senhas.splice(posicao,1)
   console.log('login excluido com sucesso')
}

function oQueFazer(){
    let fazer = prompt('O que deseja fazer? 1-cadastrar; 2-fazer login; 3-excluir um cadastro; 4-encerrar programa')
    return fazer
}

let continuar = 0

do{let fazer = oQueFazer()
    switch (fazer) {
        case "1":
            cadastrar()  
            break;
        case "2":
            let nome = prompt('digite um nome para login')
            let senha = prompt('digite uma senha para login')      
            if ( fazerLogin(nome,senha) == true) {
                console.log('login feito com sucesso')
            }else console.log ('usuario ou senha incorrretos')
            break;
        case "3":
            let nomeExcluido = prompt('digite um nome para excluir')    
            excluirCadastro(nomeExcluido)
            break;
        case "4":
            continuar = 'n'
            break;
        default:
        console.log('essa opcao nao existe')    
        break;
    }
    continuar = prompt("deseja continuar? s ou n")
} while (continuar == 's');