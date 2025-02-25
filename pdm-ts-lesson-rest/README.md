# PDM TypeScript REST App

## Testes em Aplicações Mobile

### Testes Unitários vs Testes E2E (End-to-End)

#### Testes Unitários

Os testes unitários são testes vão focar  em componentes individuais, isolados da aplicação. Em aplicações mobile, eles são utilizados para:

- Testar funções, métodos ou componentes específicos de forma isolada
- São rápidos de executar e podem ser executados offline, pois não dependem de recursos externos
- São mais simples de escrever e manter
- Utilizam mocks para simular dependências

```typescript
// Exemplo de teste unitário
test('validar formato de email', () => {
  expect(validateEmail('user@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);
});
```

#### Testes E2E (End-to-End)

Os testes E2E são testes de alto nível que simulam o comportamento real do usuário na aplicação. Em aplicações mobile eles:

- Testam fluxos completos da aplicação, do início ao fim
- Executam em ambientes que simulam dispositivos reais como navegadores, telefones e tablets
- São mais complexos e demorados para escrever e manter
- São mais caros pois precisam ser executados em um emulador ou dispositivo real
- Testam a integração entre todos os componentes, incluindo APIs e banco de dados

```typescript
// Exemplo de teste E2E usando Detox
describe('Fluxo de Login', () => {
  it('deve fazer login com sucesso', async () => {
    await element(by.id('email')).typeText('user@example.com');
    await element(by.id('password')).typeText('password123');
    await element(by.id('login-button')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
```

### Quando Usar Cada Tipo?

- **Testes Unitários**: Use para garantir que componentes individuais funcionem corretamente e para detectar bugs rapidamente durante o desenvolvimento
- **Testes E2E**: Use para validar fluxos completos da aplicação e garantir que todas as partes trabalhem juntas corretamente

### Documentação das Bibliotecas de Teste
- React Native Testing Library: https://callstack.github.io/react-native-testing-library/docs/start/quick-start
- Cypress (E2E Testing): https://docs.cypress.io/

### Executando Testes

#### Testes Unitários
```bash
yarn test
```

#### Testes E2E com Cypress
1. Certifique-se que a aplicação está rodando:
```bash
yarn web
```

2. Em outro terminal, execute os testes E2E de uma das seguintes formas:

- Modo interativo (interface gráfica):
```bash
yarn cypress:open
```

- Modo headless (linha de comando):
```bash
yarn test:e2e
```

Os testes E2E validam os seguintes fluxos:
- Login e autenticação
- Gerenciamento de carros (CRUD)
- Busca e filtragem
- Sistema de favoritos
---
# REST Example using Axios

Video (PT-BR): [https://www.youtube.com/watch?v=pewHnJfl_Y4](https://www.youtube.com/watch?v=pewHnJfl_Y4)

## Setup API

This project uses PocketBase Rest API.

1. Download PocketBase from [https://pocketbase.io/](https://pocketbase.io/)

2. Extract it to any empty folder

3. Execute (on linux) with: `./pocketbase serve`

4. Access the admin page: [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/)

5. On pocketbase ui, create a user: `fulano` with password `pdm123pdm`

6. Create a collection named `cars` with the following fields:

```
brand: string (Plain Text on pocketbase);
model: string (Plain Text on pocketbase);
hp: number;
```

7. Using the pocketbase ui, add some records to the `cars` collection.

8. Setup all collection Api Rules (the gear icon on top header) to `@request.auth.id != ""`

## Setup App

This app is pre-configured to run using Android Emulator on linux. You can update it as needed:

1. Open the file [src/servies/api.ts](src/servies/api.ts)

2. Uncomment (or edit) `baseUrl` according to your use case

## Lazy?

There's a pre-configured pocketbase instance in [pocketbase/](pocketbase/) folder. Unpack an run it. Admin login is admin@example.com, password is 123123123123.
