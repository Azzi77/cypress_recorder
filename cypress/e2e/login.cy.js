describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1366, 625)
    
       cy.visit('https://www.saucedemo.com/')
    
       cy.get('div > .login_wrapper > .login_credentials_wrap > .login_credentials_wrap-inner > #login_credentials').click()
    
       cy.get('#login_button_container > .login-box > form > .form_group > #user-name').click()
    
       cy.get('#login_button_container > .login-box > form > .form_group > #user-name').type('standard_user')
    
       cy.get('div > .login_wrapper > .login_credentials_wrap > .login_credentials_wrap-inner > .login_password').click()
    
       cy.get('#login_button_container > .login-box > form > .form_group > #password').click()
    
       cy.get('#login_button_container > .login-box > form > .form_group > #password').type('secret_sauce')
    
       cy.get('.login_wrapper-inner > #login_button_container > .login-box > form > #login-button').click()
    
       cy.get('.inventory_list > .inventory_item > .inventory_item_description > .pricebar > #add-to-cart-sauce-labs-backpack').click()
    
       cy.get('.inventory_list > .inventory_item > .inventory_item_description > .pricebar > #remove-sauce-labs-bolt-t-shirt').click()
    
       cy.get('.inventory_list > .inventory_item > .inventory_item_description > .pricebar > #remove-sauce-labs-fleece-jacket').click()
    
       cy.get('.inventory_list > .inventory_item > .inventory_item_description > .pricebar > #add-to-cart-sauce-labs-onesie').click()
    
       cy.get('.inventory_list > .inventory_item > .inventory_item_description > .pricebar > #add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)').click()
    
    })
   
   })
   