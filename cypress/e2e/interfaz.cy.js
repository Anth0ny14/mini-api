describe('Calculadora UI', () => {
  it('Debe mostrar el resultado correcto', () => {
    cy.visit('/');
    cy.get('#a').type('2');
    cy.get('#b').type('3');
    cy.contains('Sumar').click();
    cy.get('#resultado').should('contain', 'Resultado: 5');
  });
});
