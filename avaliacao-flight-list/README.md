
# Aplicativo Duty Free - Atividade Avaliativa 1

Atividade avaliativa da matéria de Programação para Dispositivos Móveis, focando na criação de um aplicativo utilizando **Expo**, **Expo Rouer** e **React Native** com **Typescript**. A aplicação possui três telas principais: **Login**, **Listagem** e **Sobre**, com funcionalidades específicas baseadas nos requisitos fornecidos pelo cliente.

---

## Funcionalidades e Requisitos

### Estrutura do Projeto
- O projeto foi criado seguindo o modelo do **Módulo 2**, utilizando **Expo Router** para navegação entre as telas.
- Estrutura do projeto:
  ```
  app/
    _layout.tsx
    index.tsx  
    listagem.tsx 
    sobre.tsx
  components/
    listagem/
      PassengerItem.tsx
      SectionHeader.tsx
    login/
      FormInput.tsx
      ImageButton.tsx
      Logo.tsx
    ImageButton.tsx 
  helpers/
    index.ts
  services/
    data-passengers.ts
  ```

### Componentes
- Todos os componentes foram criados como **funções** utilizando hooks.
- A aplicação foi dividida em componentes reutilizáveis, incluindo:
  - **ImageButton**: Botão de imagem utilizado na tela de Login.
  - **HeaderMenu**: Menu no topo das telas com ActionSheet.
  - **SectionHeader**: Cabeçalho das seções na tela de Listagem.
  - **Helpers**: Funções auxiliares, como a categorização dos dados para a SectionList.

### Tela de Login
- Credenciais:
  - Usuário: `fulano`
  - Senha: `123`
- Verificação de senha:
  - Senha oculta enquanto o usuário digita.
- Botão de login funcional que redireciona para a tela de Listagem.
- **ImageButton** utilizado como botão decorativo para navegação.

### Tela de Listagem
- Uso da **SectionList** para exibir os dados de passageiros categorizados por países de origem/destino.
- Agrupamento dinâmico dos dados implementado em um **helper**.
- Design limpo e funcional:
  - Categorias exibidas no cabeçalho, com ícones de expansão (Chevron).
  - Dados apresentados de forma intuitiva, com avatares e detalhes do passageiro.

### Tela Sobre
- Foto de perfil.
- Texto “Desenvolvido por” e link funcional para o GitHub.
- O link abre o navegador para o perfil do GitHub do desenvolvedor.

### ActionSheet
- Implementado com a biblioteca **@expo/react-native-action-sheet**.
- Botão estilo hambúrguer no topo da tela ativa a ActionSheet.
  - Opções: **Logout** (destrutiva) e **Sobre**.
- Navegação ao fazer logout:
  - Retorna para a tela de login desempilhando todas as telas anteriores, garantindo que o botão "voltar" do dispositivo não retorne para a tela de listagem.
