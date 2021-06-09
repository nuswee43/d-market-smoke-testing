describe('User Management Page', () => {

    beforeEach('Go to user management page', () => {
        cy.viewport('iphone-x');
        cy.go_to_sawitee_account();
    })

    it('F1_User_Management_0105', () => {
        cy.user_management_validation();
        cy.get('.mt-4').contains('BIO Cocoa').click();
        cy.shop_owner_checking();
    });

    it('F1_User_Management_0106', () => {
        cy.user_management_validation();
        cy.get('.mt-4').contains('กระเป๋าขนมไทย คณิตา2').click();
        cy.shop_admin_checking('กระเป๋าขนมไทย คณิตา2');
    });

    it('F1_User_Management_0107', () => {
        cy.user_management_validation();
        cy.get('.mt-4').contains('Cat Village');
        cy.get('.mr-2 > .text-blue').contains('กดรับดูแลร้าน');
        cy.admin_request_checking('Cat Village');
    });

    it('F2_User_Management_0117', () => {
        cy.create_admin_request();
        cy.go_to_sawitee_account();
        cy.user_management_validation();
        cy.go_to_sawitee_account();
        cy.admin_request_checking('Qa test');
        cy.get('.fixed > :nth-child(1) > .undefined').contains('ยืนยัน').click();
        cy.consent_checking();
        cy.get('rect').click();
        cy.get('.h-12').click();
        cy.admin_accept_request_checking('Qa test');
        cy.wait(1000);
        cy.delete_admin_request();
    });

    it('F3_User_Management_0108', () => {
        cy.get('.mt-4').contains('BIO Cocoa').click();
        cy.get(':nth-child(5) > :nth-child(3) > :nth-child(3)').contains('จัดการสิทธิทีมงานร้านค้า').click();
        cy.get('.justify-end > .undefined').contains('ส่งคำเชิญอีกครั้ง').click();
        cy.get('.ml-2').contains('ตกลง').click();
        cy.contains('ส่งคำเชิญสำเร็จ').should('be.visible');
    });

    it('F4_User_Management_0105', () => {
        cy.create_admin_request();
    });

    it('F6_User_Management_0106', () => {
        cy.delete_admin_request();
    });

})