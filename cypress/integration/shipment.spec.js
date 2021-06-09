describe('Shipment Management Page', () => {

    beforeEach('Go to shipment management page', () => {
        cy.viewport('iphone-x');
        cy.go_to_sawitee_account();
        cy.get('.mt-4').contains('BIO Cocoa').should('be.visible').click();
        cy.wait(500);
        cy.go_to_shipment();
    })

    it('Verify Details of Shipment Management Page', () => {
        cy.contains('ตั้งค่าการจัดส่ง', { timeout: 15000 }).should('be.visible');
        cy.contains('เลือกช่องทางการจัดส่งสินค้าที่คุณต้องการ', { timeout: 15000 }).should('be.visible');
        cy.contains('การจัดส่งทุกช่องทางจะดำเนินการโดยบริษัทตัวแทน', { timeout: 15000 }).should('be.visible');
        cy.get('.w-4').should('be.visible');
        cy.contains('รายละเอียดเพิ่มเติม').should('be.visible');
        cy.contains('ที่อยู่ในการนัดรับเป็นที่อยู่เดียวกันกับที่อยู่ร้านค้า').should('be.visible');
        cy.contains('Kerry Express').should('be.visible');
        cy.contains('บริการส่งที่สาขา').should('be.visible');
        cy.get(':nth-child(2) > .flex-1').should('be.visible');
        cy.contains('ไปรษณีย์ไทย EMS').should('be.visible');
        cy.contains('บริการส่งที่สาขา').should('be.visible');
        cy.get(':nth-child(3) > .flex-1').should('be.visible');
        cy.contains('ไปรษณีย์ไทย ลงทะเบียน').should('be.visible');
        cy.contains('บริการส่งที่สาขา').should('be.visible');
        cy.get(':nth-child(4) > .flex-1').should('be.visible');
        cy.contains('Flash Express').should('be.visible');
        cy.contains('บริการนัดรับ').should('be.visible');
        cy.get(':nth-child(5) > .flex-1').should('be.visible');
        cy.contains('SCG Express').should('be.visible');
        cy.contains('บริการนัดรับ').should('be.visible');
        cy.get(':nth-child(6) > .flex-1').should('be.visible');
        cy.get('.h-12', { timeout: 15000 }).should('not.be.enabled');
    });

    it('F1_Shipment_0106', () => {
        cy.get('.h-12', { timeout: 15000 }).should('not.be.enabled');
        cy.contains('Kerry Express').click();
        cy.contains('บันทึก').should('be.visible').click();
        cy.contains('บันทึกข้อมูลสำเร็จ', { timeout: 15000 }).should('be.visible');
    });

})