describe('Shop Information Page (Shop Owner)', () => {

    beforeEach('Go to shop information page', () => {
        cy.viewport('iphone-x');
        cy.go_to_sawitee_account();
        cy.get('.mt-4').contains('BIO Cocoa').click();
        cy.wait(500);
        cy.go_to_shop_info();
    })

    it('F1_Shop_Info_0100', () => {
        cy.contains('ข้อมูลร้านค้า', { timeout: 15000 });
        cy.get('.css-2cvw38 > .flex', { timeout: 15000 }).should('be.visible');
        cy.contains('อัปโหลดโลโก้ร้านค้า', { timeout: 15000 });
        cy.get(':nth-child(3) > .grid > .text-grayDarkest').contains('เจ้าของร้าน');
        cy.get(':nth-child(3) > .grid > .text-black').contains('สาวิตรี ศรีวิมลศิริ');
        cy.get('[name=name]').should('be.enabled');
        cy.contains('ชื่อร้านค้า');
        cy.get('.mt-2').should('be.visible').contains('/20');
        cy.contains('ประเภทสินค้าหลัก');
        cy.contains('เบอร์โทรศัพท์');
        cy.contains('อีเมล');
        cy.contains('คำอธิบายร้านค้า *ถ้ามี');
        cy.contains('ที่อยู่ร้านค้า');
        cy.contains('ช่องทางติดต่ออื่นๆ *ถ้ามี');
        cy.contains('ปิดร้านชั่วคราว');
        cy.get('[type=checkbox]').should('be.disabled');
        cy.contains('หากเปิดใช้งานการปิดร้านชั่วคราว');
        cy.contains('ลูกค้าจะไม่เห็นร้านบน D Market');
        cy.contains('บันทึก');
        cy.get('.bottom-0 > .w-full > .flex').should('be.visible');
    });

    it('F1_Shop_Info_0106', () => {
        cy.contains('เบอร์โทรศัพท์', { timeout: 15000 });
        cy.get('[errormessage="เบอร์โทรศัพท์ไม่ครบหรือไม่ถูกต้อง"] > .MuiInputBase-root > .MuiInputBase-input').clear({ force: true }).type('1234567890');
        cy.contains('บันทึก').click();
        cy.get('.text-sm.w-full.text-red').should('be.visible').contains('เบอร์โทรศัพท์ไม่ครบหรือไม่ถูกต้อง');
    });

    it('F1_Shop_Info_0108', () => {
        cy.contains('อีเมล', { timeout: 15000 });
        cy.get('[errormessage="รูปแบบอีเมลไม่ถูกต้อง"] > .MuiInputBase-root > .MuiInputBase-input').clear({ force: true }).type('test.test.test');
        cy.contains('บันทึก').click();
        cy.get('.text-sm').should('be.visible').contains('รูปแบบอีเมลไม่ถูกต้อง');
    });

})

describe('Shop Information Page (Shop Admin)', () => {

    beforeEach('Go to shop information page', () => {
        cy.viewport('iphone-x');
        cy.go_to_sawitee_account();
        cy.get('.mt-4').contains('กระเป๋าขนมไทย คณิตา2').click({ force: true });
        cy.go_to_shop_info().click();
    })

    it('F3_Shop_Info_0101', () => {
        cy.contains('ข้อมูลร้านค้า', { timeout: 15000 });
        cy.get('.css-2cvw38 > .flex').should('be.visible');
        cy.contains('อัปโหลดโลโก้ร้านค้า', { timeout: 15000 });
        cy.get(':nth-child(3) > .grid > .text-grayDarkest').contains('เจ้าของร้าน');
        cy.get(':nth-child(3) > .grid > .text-black').contains('รณัฐชัย เฉินบำรุง');
        cy.get('[name=name]').should('be.enabled');
        cy.contains('ชื่อร้านค้า');
        cy.get('.mt-2').should('be.visible').contains('/20');
        cy.contains('ประเภทสินค้าหลัก');
        cy.contains('เบอร์โทรศัพท์');
        cy.contains('อีเมล');
        cy.contains('คำอธิบายร้านค้า *ถ้ามี');
        cy.contains('ที่อยู่ร้านค้า');
        cy.contains('ช่องทางติดต่ออื่นๆ *ถ้ามี');
        cy.contains('ปิดร้านชั่วคราว').should('not.exist');
        cy.get('[type=checkbox]').should('not.exist');
        cy.contains('หากเปิดใช้งานการปิดร้านชั่วคราว').should('not.exist');
        cy.contains('ลูกค้าจะไม่เห็นร้านบน D Market').should('not.exist');
        cy.contains('บันทึก');
        cy.get('.bottom-0 > .w-full > .flex').should('be.visible');
    });

})