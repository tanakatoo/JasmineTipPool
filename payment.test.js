describe('test payment', function () {
    beforeEach(function () {
        document.querySelector("#billAmt").value = 100
        document.querySelector("#tipAmt").value = 20
    })
    
    it('should not make an entry if bill amount is empty', function () {
        document.querySelector("#billAmt").value = ''
        document.querySelector("#tipAmt").value = ""
        submitPaymentInfo()
        //payment
        expect(allPayments).toEqual({})
        //summary
    })

    it('should add info to allPayments in submitPaymentInfo()', function () {
        submitPaymentInfo()
        //payment
        expect(allPayments['payment1'].billAmt).toEqual('100')
        expect(allPayments['payment1'].tipAmt).toEqual('20')
        expect(allPayments['payment1'].tipPercent).toEqual(20)
        //summary
    })

    it('should add row to payment table appendPaymentTable()', function () {
        //submitPaymentInfo()
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment)
        let allTds = document.querySelectorAll("#paymentTable tbody tr td")
        //let allTds = document.querySelectorAll("#payment1 td")
        expect(allTds[0].innerText).toEqual("$100")
        expect(allTds[1].innerText).toEqual("$20")
        expect(allTds[2].innerText).toEqual("20%")
        //expect(document.getElementById(paymentId).innerHTML).toEqual("<td>$100</td><td>$20</td><td>20%</td>")
    })

    it('should add row to summary table updateSummary()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        updateSummary();
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('20%');
    })

    afterEach(function () {
        document.querySelector("#paymentTable tbody").innerHTML = ''
        allPayments = {};
        paymentId = 0;
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
    })
})