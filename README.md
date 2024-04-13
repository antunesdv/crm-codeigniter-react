# crm-codeigniter-react
Crm realizado utilizando codeigniter para back end e react para front end
<br/>

## Sobre o Projeto
Sistema de Gerenciamento de Alunos
Bem-vindo ao meu Sistema de Gerenciamento de Alunos! Este é um projeto desenvolvido para facilitar o processo de organização e servindo também de testes para entrar na Empresa que gostaria.

Principais Recursos:
Cadastro de Alunos: Registre e Atualize informações detalhadas sobre cada aluno, como nome, telefone, endereco, e-mail e muito mais.
Controle de Alunos: Visualize todos os alunos matriculados, podemdo excluir, editar e até criar novas matriculas.

Como Utilizar:
Clonagem do Repositório: Clone este repositório em sua máquina local usando o comando git clone.

Configuração do Ambiente: Siga as instruções no arquivo README.md para configurar e executar o sistema em seu ambiente local.

Explorando o Código: Dê uma olhada no código-fonte para entender a estrutura do projeto.

Contribuições: Sinta-se à vontade para contribuir com sugestões, correções de bugs ou novos recursos através de pull requests. Toda colaboração é bem-vinda!

Tecnologias Utilizadas:
[Codeigniter para o back-end, React para o front-end e MySQL para o banco de dados]
Demonstrações:

Obrigado por explorar o Sistema de Gerenciamento de Alunos! Espero que seja útil.



### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install NPM packages

```sh
npm install
```

### OBS: PARA FUNCIONAR O DATABASE É INDISPENSÁVEL A CRICAO DE UM BANCO COM NOME DE 'database' E IMPORTAR O CÓDIGO ABAIXO

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/04/2024 às 06:17
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `database`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Despejando dados para a tabela `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(3, '3131', '32131321', 31231321, '3123131', '2024-04-12 20:09:11', '2024-04-13 06:32:36'),
(4, 'Nome 04', 'email04@gmail.com', 44444, 'Rua 04', '2024-04-12 21:28:32', '2024-04-12 21:28:52'),
(5, 'Aluno 1', '1', 1, '1', '2024-04-13 05:36:16', '2024-04-13 05:36:16'),
(9, 'Teste completo 02', 'Teste completo 02', 1, 'Teste completo 02', '2024-04-13 06:45:35', '2024-04-13 06:45:35');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



## Authors

***Henrique Antunes ***

