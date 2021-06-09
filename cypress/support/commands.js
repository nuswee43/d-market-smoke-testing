// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
//common
Cypress.Commands.add('go_to_ake_account', () => {
    cy.visit('https://d-market-frontend-sit.th-service.co.in/profile?paotangToken=J%2F7rtCRvDE2x8udEcFQJvJPYpp3cUPohM28VhwIcipgx3iloRSWfA51SkA1pWG7vsG23OR5E3xaq8W2An3gtJg%3D%3D.pwQb8oug1uBB');
})
Cypress.Commands.add('go_to_sawitee_account', () => {
    cy.visit('https://d-market-frontend-sit.th-service.co.in/profile?paotangToken=J%2F3jtCVjCky59edEcVcBuJbYr5zcWvohM24XigURjJ8x3CloRSWfAp1TnQBiX27qMERZWaQ6UVXdyOwScbH6Qg%3D%3D.pwQb8oug1uBB');
})
//account
Cypress.Commands.add('go_to_account', () => {
    cy.contains('ตั้งค่าบัญชี', { timeout: 15000 }).click();
})
//shipment
Cypress.Commands.add('go_to_shipment', () => {
    cy.contains('ตั้งค่าการจัดส่ง', { timeout: 15000 }).click();
})
//shop information
Cypress.Commands.add('go_to_shop_info', () => {
    cy.contains('ข้อมูลร้านค้า', { timeout: 15000 }).click();
})
//user management
Cypress.Commands.add('user_management_validation', () => {
    cy.get('.items-start > .w-6').should('be.visible');
    cy.get('.grid > .text-black').contains('บัญชีของฉัน');
    cy.get('.css-e1glne').should('be.visible');
    cy.get('.bg-white > .p-4 > .flex').should('be.visible');
    cy.get('.p-4 > .self-center').contains('สาวิตรี ศรีวิมลศิริ');
    cy.get('.items-baseline > :nth-child(1) > .font-semibold').contains('รายการสั่งซื้อของฉัน');
    cy.get('.items-baseline > :nth-child(3) > :nth-child(1)').contains('ดูทั้งหมด');
    cy.get('.css-wtngbz').should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .m-4 > .flex').should('be.visible');
    cy.get('.fadeIn > :nth-child(3)').contains('ที่อยู่ในการรับสินค้า');
    cy.get('.fadeIn > :nth-child(3) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get('.mt-4 > :nth-child(1)').contains('ร้านค้าของฉัน');
    cy.get('.mt-4 > :nth-child(3)').should('be.visible');
    cy.get(':nth-child(3) > .flex-1 > .mr-2 > .text-white').should('be.visible');
})

Cypress.Commands.add('shop_owner_checking', () => {
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4', { timeout: 5000 }).should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .font-semibold').contains('BIO Cocoa').should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .text-grayDarkest').contains('ตำแหน่ง : เจ้าของร้าน').should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > :nth-child(3)').contains('สถานะร้านค้า : เปิดร้านอยู่').should('be.visible');
    cy.get('.slick-dots').should('be.visible');
})

Cypress.Commands.add('shop_admin_checking', (shop_name) => {
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4', { timeout: 5000 }).should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .font-semibold').contains(shop_name).should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .text-grayDarkest').contains('ตำแหน่ง : ผู้ดูแลร้าน').should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > :nth-child(3)').contains('สถานะร้านค้า : เปิดร้านอยู่').should('be.visible');
    cy.get('.slick-dots').should('be.visible');
})

Cypress.Commands.add('admin_request_checking', (shop_name) => {
    cy.get('.mt-4').contains(shop_name).click();
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4', { timeout: 5000 }).should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .font-semibold').contains(shop_name).should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > .text-grayDarkest').contains('ตำแหน่ง : -').should('be.visible');
    cy.get('.slick-active > :nth-child(1) > .w-full.bg-white > .my-4 > .w-full > .undefined > .flex > :nth-child(3)').contains('สถานะร้านค้า : เปิดร้านอยู่').should('be.visible');
    cy.get('.slick-dots').should('be.visible');
    cy.get('.mb-8 > .text-xl').contains('ยืนยันสิทธิผู้ดูแลร้าน').should('be.visible');
    cy.get('.mb-8 > .text-sm').contains('คุณได้รับคำเชิญให้เป็นผู้ดูแลร้าน กรุณาตรวจสอบคำเชิญเป็นผู้ดูแลร้านค้านี้').should('be.visible');
    cy.get(':nth-child(4) > .text-grayDarkest').contains('เจ้าของร้าน').should('be.visible');
    cy.get(':nth-child(5) > .text-grayDarkest').contains('ชื่อร้าน').should('be.visible');
    cy.get(':nth-child(6) > .text-grayDarkest').contains('ตำแหน่ง').should('be.visible');
    cy.get(':nth-child(7) > .text-grayDarkest').contains('วันที่เชิญ').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('รายละเอียดสิทธิผู้ดูแลร้าน').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('- จัดการคำสั่งซื้อได้').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('- จัดการสินค้าภายในร้านได้').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('- เล่าสตอรี่ร้านค้าได้').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('- ตั้งค่าการจัดส่งได้').should('be.visible');
    cy.get('.mb-8 > .flex-col').contains('- แก้ไขข้อมูลร้านค้าได้').should('be.visible');
    cy.get('.fixed > :nth-child(1) > .mr-4').contains('ยกเลิก').should('be.visible');
    cy.get('.fixed > :nth-child(1) > .undefined').contains('ยืนยัน').should('be.visible');
})

Cypress.Commands.add('consent_checking', () => {
    cy.get('[style="z-index: 99; position: fixed; left: 0px; width: 100%; top: 0px; height: 100%; overflow: scroll; transform: translate3d(0%, 0px, 0px);"] > .pt-0 > .css-ijamft > .top-nav > .grid > .text-black').contains('ข้อตกลงและเงื่อนไข').should('be.visible');
    cy.get('[style="z-index: 99; position: fixed; left: 0px; width: 100%; top: 0px; height: 100%; overflow: scroll; transform: translate3d(0%, 0px, 0px);"] > .pt-0 > .css-ijamft > .top-nav > .grid > .text-black').contains('และนโยบายความเป็นส่วนตัว').should('be.visible');
    cy.get('.rounded-xl').should('be.visible');
    cy.get('.rounded-xl > :nth-child(1)').contains('ส่วนที่ 1 ข้อกำหนดและเงื่อนไขการให้บริการ').should('be.visible');
    cy.get('.rounded-xl > :nth-child(2)').contains('ส่วนที่ 2 นโยบายความเป็นส่วนตัวสำหรับร้านค้า สินค้าแพลตฟอร์ม D Market').should('be.visible');
    cy.get('.rounded-xl > :nth-child(3)').contains('ส่วนที่ 3 ข้อตกลงการใช้งาน Shippop').should('be.visible');
    cy.get('.rounded-xl > .mt-4').contains('ดูเอกสารส่วนที่ 1, 2 และ 3').should('be.visible');
    cy.get('rect').should('be.visible');
    cy.get('.rounded-xl > :nth-child(6) > :nth-child(2)').contains('ยอมรับเงื่อนไขการใช้บริการและรับทราบ นโยบายความเป็นส่วนตัวเพื่อการใช้งาน แพลตฟอร์ม').should('be.visible');
})

Cypress.Commands.add('admin_accept_request_checking', (shop_name) => {
    cy.contains('ยืนยันเป็นผู้ดูแลร้านสำเร็จ', { timeout: 5000 });
    cy.admin_request_checking(shop_name);
    cy.get('.css-ijamft > :nth-child(4) > :nth-child(1) > :nth-child(1)').contains('การขายของฉัน').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(1) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(1) > :nth-child(3)').contains('สินค้าของฉัน').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(3) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(1) > :nth-child(5)').contains('สตอรี่ของฉัน').should('be.visible');
    cy.get(':nth-child(5) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get('.css-ijamft > :nth-child(4) > :nth-child(2) > :nth-child(1)').contains('ข้อมูลร้านค้า').should('be.visible');
    cy.get(':nth-child(2) > :nth-child(1) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2) > :nth-child(3)').contains('ตั้งค่าการจัดส่ง').should('be.visible');
    cy.get(':nth-child(2) > :nth-child(3) > .flex-1 > .css-0 > svg').should('be.visible');
    cy.get(':nth-child(3) > .bg-white').contains('ดูหน้าร้านค้า').should('be.visible');
    cy.get(':nth-child(3) > .bg-white > .flex-1 > .css-0 > svg').should('be.visible');
})

Cypress.Commands.add('delete_admin_request', () => {
    cy.go_to_ake_account();
    cy.get('.mt-4 > :nth-child(7)').contains('Qa test').click();
    cy.get(':nth-child(5) > :nth-child(3) > :nth-child(3)').contains('จัดการสิทธิทีมงานร้านค้า').click();
    cy.get(':nth-child(5) > .absolute > svg').click();
    cy.get('.justify-center').contains('ลบทีมงานนี้').click();
    cy.get('.ml-2').contains('ตกลง').click();
    cy.contains('ลบทีมงานสำเร็จ').should('be.visible');
})

Cypress.Commands.add('create_admin_request', () => {
    cy.go_to_ake_account();
    cy.get('.mt-4 > :nth-child(7)').contains('Qa test').click();
    cy.get(':nth-child(5) > :nth-child(3) > :nth-child(3)').contains('จัดการสิทธิทีมงานร้านค้า').click();
    cy.get('.h-12').contains('เพิ่มทีมงาน').click();
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('สาวิตรี', { force: true });
    cy.get('[errormessage="เลขบัตรประชาชนไม่ครบหรือไม่ถูกต้อง"] > .MuiInputBase-root > .MuiInputBase-input').type('1101500493594');
    cy.get('.MuiFormControl-root.mt-4 > .MuiInputBase-root > .MuiInputBase-input').type('0979794422');
    cy.get('[style="z-index: 99; position: fixed; left: 0px; width: 100%; top: 0px; height: 100%; overflow: scroll; transform: translate3d(0%, 0px, 0px);"] > .pt-0 > .css-ijamft > .bottom-0 > .h-12').contains('เพิ่มทีมงาน').click();
    cy.get(':nth-child(1) > .h-12').contains('ยืนยัน').click();
    cy.contains('เพิ่มทีมงานและส่งคำเชิญสำเร็จ').should('be.visible');
})
