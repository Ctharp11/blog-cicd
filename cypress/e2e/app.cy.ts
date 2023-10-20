describe('Navigation', () => {
  it('should visit landing page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('A statically generated blog example using')
  })

  it('should visit dynamic routing blog page', () => {
    cy.visit('http://localhost:3000/posts/dynamic-routing')

    cy.contains('Dynamic Routing and Static Generation')
  })

  it('should visit pre-render blog page', () => {
    cy.visit('http://localhost:3000/posts/hello-world')

    cy.contains('Learn How to Pre-render Pages Using Static Generation with Next.js')
  })

  it('should visit preview mode blog page', () => {
    cy.visit('http://localhost:3000/posts/preview')

    cy.contains('Preview Mode for Static Generation')
  })
})