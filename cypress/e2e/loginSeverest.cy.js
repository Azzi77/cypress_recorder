describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1366, 625)
    
       cy.visit('https://front.serverest.dev/login')
    
       cy.get('.App > .login-page > .form > .message > .btn').click()
    
       cy.get('.App > .register-page > .form > .mb-3 > #nome').click()
    
       cy.get('.App > .register-page > .form > .mb-3 > #nome').type('Maria Macedo')
    
       cy.get('.App > .register-page > .form > .mb-3 > #email').click()
    
       cy.get('.App > .register-page > .form > .mb-3 > #email').type('maria@macedo.com.br')
    
       cy.get('.App > .register-page > .form > .mb-3 > #password').click()
    
       cy.get('.App > .register-page > .form > .mb-3 > #password').type('1234')
    
       //cy.get('.register-page > .form > .mb-3 > .form-check > #administrador').click()
    
     //  cy.get('.register-page > .form > .mb-3 > .form-check > #administrador').check('on')
    
       cy.get('.App > .register-page > .form > .mb-3 > .btn').click()
    
    })
   
   })
   