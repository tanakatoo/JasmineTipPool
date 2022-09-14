describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect(serverNameInput.value).toEqual('');
  });

  it('should add a row to table of servers', function () {
    submitServerInfo();
    expect(document.querySelector("#server" + serverId).innerHTML).toEqual('<td>Alice</td><td>$0.00</td>');

  })

  it('should not add a row if input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update tip amount updateServerTable()', function () {
    submitServerInfo();
    document.querySelector("#billAmt").value = 100
    document.querySelector("#tipAmt").value = 20
    submitPaymentInfo()
    document.querySelector("#billAmt").value = 200
    document.querySelector("#tipAmt").value = 20
    submitPaymentInfo()
    console.log(allServers)
    serverNameInput.value = 'Karmen';
    submitServerInfo();
    
    expect(Object.keys(allServers).length).toEqual(2);
    updateServerTable();
    let allSerTip = document.querySelectorAll("#serverTable tbody tr")
    expect(allSerTip[0].innerHTML).toEqual('<td>Alice</td><td>$20.00</td>')
    expect(allSerTip[1].innerHTML).toEqual('<td>Karmen</td><td>$20.00</td>')

  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    document.querySelector("#paymentTable tbody").innerHTML = ''
        allPayments = {};
        paymentId = 0;
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
  });
});
