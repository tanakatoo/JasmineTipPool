describe('test helper functions', function () {
    beforeEach(function () {
        document.querySelector("#billAmt").value = 100
        document.querySelector("#tipAmt").value = 20
        // allPayments['payment1'].billAmt = "200"
        // allPayments['payment1'].tipAmt = "20"
        submitPaymentInfo()

    })
    
    it('should return correct amount from sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20)
        expect(sumPaymentTotal('billAmt')).toEqual(100)
        expect(sumPaymentTotal('tipAmt')).toEqual(20)
    })

    it('should return total from sumPaymentTotal()', function () {
        document.querySelector("#billAmt").value = 100
        document.querySelector("#tipAmt").value = 20
        submitPaymentInfo()
        expect(sumPaymentTotal('tipPercent')).toEqual(40)
        expect(sumPaymentTotal('billAmt')).toEqual(200)
        expect(sumPaymentTotal('tipAmt')).toEqual(40)
    })
    
    it('should return correct tip percent', function () {
        expect(calculateTipPercent(200,20)).toEqual(10)
    })

    it('should make a td appendTd()', function () {
        let value = 'hello'
        let tr = document.createElement('tr')
        appendTd(tr, value)
        tr.firstChild.innerText='hello'
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