describe('Car Management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });

  it('should perform complete car management flow', () => {
    cy.get('input[placeholder="Email"]').type('fulano@example.com');
    cy.get('input[placeholder="Senha"]').type('pdm123pdm');
    cy.contains('Entrar').click();

    cy.contains('Meus Carros').should('be.visible');

    cy.contains('Adicionar Novo Carro').click();
    cy.get('input[placeholder="Ex: Toyota"]').type('Ferrari');
    cy.get('input[placeholder="Ex: Corolla"]').type('F40');
    cy.get('input[placeholder="Ex: 170"]').type('478');
    cy.contains('Cadastrar').click();

    cy.contains('Ferrari').should('be.visible');
    cy.contains('F40').should('be.visible');
    cy.contains('478 HP').should('be.visible');

    cy.get('input[placeholder="Buscar por marca..."]').type('Ferrari');
    cy.contains('Ferrari').should('be.visible');
    cy.get('input[placeholder="Buscar por marca..."]').clear();

    cy.contains('Editar').click();
    cy.get('input[placeholder="Ex: Corolla"]').clear().type('F50');
    cy.contains('Atualizar').click();
    cy.contains('F50').should('be.visible');

    cy.contains('Excluir').click();
    cy.contains('Tem certeza que deseja excluir este carro?').should('be.visible');
    cy.get('[data-testid="modalButtons"]').contains('Excluir').click();
    cy.contains('Ferrari').should('not.exist');
  });

  it('should filter cars correctly', () => {
    cy.get('input[placeholder="Email"]').type('fulano@example.com');
    cy.get('input[placeholder="Senha"]').type('pdm123pdm');
    cy.contains('Entrar').click();

    cy.contains('Adicionar Novo Carro').click();
    cy.get('input[placeholder="Ex: Toyota"]').type('Ferrari');
    cy.get('input[placeholder="Ex: Corolla"]').type('F40');
    cy.get('input[placeholder="Ex: 170"]').type('478');
    cy.contains('Cadastrar').click();

    cy.contains('Adicionar Novo Carro').click();
    cy.get('input[placeholder="Ex: Toyota"]').type('Toyota');
    cy.get('input[placeholder="Ex: Corolla"]').type('Corolla');
    cy.get('input[placeholder="Ex: 170"]').type('170');
    cy.contains('Cadastrar').click();

    cy.get('input[placeholder="Buscar por marca..."]').type('Ferrari');
    cy.contains('Ferrari').should('be.visible');
    cy.contains('Toyota').should('not.exist');

    cy.get('input[placeholder="Buscar por marca..."]').clear();
    cy.contains('Ferrari').should('be.visible');
    cy.contains('Toyota').should('be.visible');
  });

  it('should edit an existing car', () => {
    cy.get('input[placeholder="Email"]').type('fulano@example.com');
    cy.get('input[placeholder="Senha"]').type('pdm123pdm');
    cy.contains('Entrar').click();

    cy.contains('Adicionar Novo Carro').click();
    cy.get('[data-testid="brand-input"]').type('BMW');
    cy.get('[data-testid="model-input"]').type('M3');
    cy.get('[data-testid="hp-input"]').type('473');
    cy.contains('Cadastrar').click();

    cy.contains('BMW').should('be.visible');
    cy.contains('M3').should('be.visible');
    cy.contains('473 HP').should('be.visible');
    cy.contains('Editar').click();

    cy.get('[data-testid="brand-input"]').clear().type('BMW');
    cy.get('[data-testid="model-input"]').clear().type('M3 Competition');
    cy.get('[data-testid="hp-input"]').clear().type('503');
    cy.get('[data-testid="update-button"]').click();

    cy.contains('BMW').should('be.visible');
    cy.contains('M3 Competition').should('be.visible');
    cy.contains('503 HP').should('be.visible');
  });

  it('should add and remove a car from favorites', () => {
    cy.get('input[placeholder="Email"]').type('fulano@example.com');
    cy.get('input[placeholder="Senha"]').type('pdm123pdm');
    cy.contains('Entrar').click();

    cy.contains('Adicionar Novo Carro').click();
    cy.get('[data-testid="brand-input"]').type('Porsche');
    cy.get('[data-testid="model-input"]').type('911 GT3');
    cy.get('[data-testid="hp-input"]').type('502');
    cy.contains('Cadastrar').click();

    cy.contains('Porsche').should('be.visible');
    cy.contains('911 GT3').should('be.visible');

    cy.get('[data-testid="favorite-button"]').last().click();

    cy.get('[data-testid="filter-button"]').click();
    cy.contains('Porsche').should('be.visible');
    cy.contains('911 GT3').should('be.visible');

    cy.get('[data-testid="favorite-button"]').first().click();

    cy.contains('Porsche').should('not.exist');
    cy.contains('911 GT3').should('not.exist');
  });
});
