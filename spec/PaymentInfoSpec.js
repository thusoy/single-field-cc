describe('single-field-cc', function () {
    var form;

    beforeEach(function () {
        form = $(

            '<fieldset class="credit-card-group">' +
                '<legend>Credit Card Information</legend>' +
                '<label for="card-number">Credit Card Number</label>' +
                '<input placeholder="1234 5678 9012 3456" pattern="[0-9]*" type="text" class="card-number" id="card-number">' +
                '<label for="card-number">Expiration Date</label>' +
                '<input placeholder="MM/YY" pattern="[0-9]*" type="text" class="card-expiration" id="card-expiration">' +
                '<label for="card-number">CVV Number</label>' +
                '<input placeholder="CVV" pattern="[0-9]*" type="text" class="card-cvv" id="card-cvv">' +
                '<label for="card-number">Billing Zip Code</label>' +
                '<input placeholder="ZIP" pattern="[0-9]*" type="text" class="card-zip" id="card-zip">' +
            '</fieldset>').appendTo('body');
        form.paymentInfo({
            focusDelay: 0,
        });
    });

    afterEach(function () {
        $('.credit-card-group').remove();
    });

    describe('Luhn test', function () {
        it('should be able to detect valid numbers', function () {
            $('#card-number').val('4111111111111111');
            expect($('#card-number').hasClass('invalid')).toBeFalsy();
        });

        it('Should shorten valid numbers to only the last  4 digits', function (done) {
            $('#card-number').val('4111111111111111');
            $('#card-number').trigger('keyup');
            setTimeout(function () {
                expect($('#card-number').val()).toBe('1111');
                done();
            }, 1000);
        });
    });
});

 /*
 // American Express 
 '378282246310005': true,
 '378282246310002': false,
 // American Express 
 '371449635398431': true,
 '371449635398432': false,
 // American Express Corporate 
 '378734493671000': true,
 '378734493671002': false,
 // Australian BankCard 
 '5610591081018250': true,
 '5610591081018252': false,
 // Diners Club 
 '30569309025904': true,
 '30569309025902': false,
 // Diners Club 
 '38520000023237': true,
 '38520000023232': false,
 // Discover 
 '6011111111111117': true,
 '6011111111111112': false,
 // Discover 
 '6011000990139424': true,
 '6011000990139422': false,
 // JCB 
 '3530111333300000': true,
 '3530111333300002': false,
 // JCB 
 '3566002020360505': true,
 '3566002020360502': false,
 // MasterCard 
 '5555555555554444': true,
 '5555555555554442': false,
 // MasterCard 
 '5105105105105100': true,
 '5105105105105102': false,
 // Visa 
 '4111111111111111': true,
 '4111111111111112': false,
 // Visa 
 '4012888888881881: true,
 '4012888888881882: false,*/