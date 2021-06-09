describe('Account Management Page', () => {

    beforeEach('Go to account management page', () => {
        cy.viewport('iphone-x');
        cy.go_to_sawitee_account();
        cy.get('.mt-4').contains('BIO Cocoa').should('be.visible').click();
        cy.wait(500);
        cy.go_to_account();
    })

    it('F3_Account_0101', () => {
        cy.contains('ตั้งค่าบัญชี', { timeout: 15000 }).should('be.visible');
        cy.contains('บัญชีกรุงไทยใช้สำหรับรับเงินจากการขายสินค้า D Market', { timeout: 15000 }).should('be.visible');
        cy.get('.css-jmvyn0').should('be.visible');
        cy.contains('บัญชีกรุงไทย').should('be.visible');
        cy.contains('เลขที่บัญชี *** * **').should('be.visible');
        cy.contains('เปลี่ยนบัญชี').should('be.visible');
        cy.contains('เปลี่ยนบัญชี').click({ force: true });
        cy.get('[style="z-index: 99; position: fixed; left: 0px; width: 100%; top: 0px; height: 100%; overflow: scroll; transform: translate3d(0%, 0px, 0px);"] > .overflow-y-auto > .css-ijamft > .top-nav > .grid > .text-black').contains('เปลี่ยนบัญชีที่ผูก').should('be.visible');
        cy.contains('เลือกบัญชีที่เคยผูกไว้กับเป๋าตัง', { timeout: 10000 }).should('be.visible');
        cy.get(':nth-child(4) > .h-20 > .items-center > [style="align-self: flex-start;"] > .mr-4 > .rounded-lg').should('be.visible');
        cy.contains('ผูกบัญชีกรุงไทย').should('be.visible');
        cy.get('.w-4').should('be.visible');
        cy.contains('บัญชีกรุงไทยนี้ใช้สำหรับรับเงินจากการขายสินค้าบน D Market', { timeout: 15000 }).should('be.visible');
    });

    it('F4_Account_0114', () => {
        cy.contains('เปลี่ยนบัญชี', { timeout: 15000 }).click();
        cy.get(':nth-child(4) > .h-20', { timeout: 15000 }).click();
        cy.get('.MuiInputBase-input').should('be.visible');
        cy.get('div.mt-4', { timeout: 10000 }).contains('ใส่เลขบัญชีกรุงไทย 10 หลัก');
        cy.get('.h-12').should('not.be.enabled');
        cy.get('.MuiInputBase-input').type('0000706248');
        cy.get('.h-12').should('be.visible').click();
        cy.get(':nth-child(4) > .overflow-y-auto > .css-ijamft > .top-nav > .grid > .text-black').contains('ยืนยันบัญชีที่ผูก').should('be.visible');
        cy.get('[style="min-height: 85vh;"] > .justify-between > .flex-shrink-0 > .css-jmvyn0').should('be.visible');
        cy.get('.flex-1 > .text-black').contains('บัญชีกรุงไทย').should('be.visible');
        cy.contains('เจ้าของบัญชี').should('be.visible');
        cy.get('.mt-2 > .text-grayDarkest').contains('เลขที่บัญชี').should('be.visible');
        cy.contains('สาวิตรี ศรีวิมลศิริ').should('be.visible');
        cy.get('.text-black > span').contains('*** * **624 8').should('be.visible');
        cy.get(':nth-child(4) > .overflow-y-auto > .css-ijamft > .bottom-0 > .h-12').should('be.visible').click();
        let i;
        for (i = 0; i < 6; i++) {
            cy.get('.bg-white > :nth-child(11)').click();
        }
        cy.contains('บันทึกข้อมูลสำเร็จ', { timeout: 5000 });
        cy.get('div.text-black.text-xl.font-semibold.truncate.w-full.css-1nwrmrp').contains('ตั้งค่าบัญชี', { timeout: 15000 });
        cy.contains('บัญชีกรุงไทยใช้สำหรับรับเงินจากการขายสินค้า D Market');
        cy.get('.css-jmvyn0').should('be.visible');
        cy.contains('บัญชีกรุงไทย');
        cy.contains('เลขที่บัญชี *** * **624 8');
        cy.contains('เปลี่ยนบัญชี').should('be.visible');
    });

})