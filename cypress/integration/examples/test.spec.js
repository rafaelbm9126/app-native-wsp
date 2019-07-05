context('Network Requests', () => {
    beforeEach(() => {
        // cy.visit('http://localhost:8080/')
        cy.visit('https://web.whatsapp.com/')

        cy.viewport(800, 800);

        
        cy.document().then((doc) => {
            setInterval(() => {
                let input = doc.querySelector('#side > div._2HS9r > div > label > input');

                console.log('*****HOLAAAA******', input);

                setInterval(() => {
                    let text   = doc.querySelector('div._3u328.copyable-text.selectable-text');
                    let button = doc.querySelector('#main > footer > div._2i7Ej.copyable-area > div:nth-child(3) > button');
                    
                    let event_input = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
                    let event_click = new Event('click', {
                        'bubbles': true,
                        'cancelable': true
                    });
                    
                    text.innerText = 'Boot Envio de span.';
                    
                    text.dispatchEvent(event_input);
                    button.dispatchEvent(event_click);
                }, 5000);
            
                // let event_enter = new KeyboardEvent('keyup', {
                //     keyCode: 13,
                // });

                // find.value     = '+51 985 301 694'

                // find.dispatchEvent(event_enter);



                input.dispatchEvent(new Event('focus', {'bubbles': true, 'cancelable': true }));
                input.value = '+51 977 544 773';
                input.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: false, data: " ", inputType: "insertText", which: 0, composed: false }));
                input.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
                input.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
                input.dispatchEvent(new KeyboardEvent('keypress', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
                input.select();
                input.dispatchEvent(new Event('focus', {'bubbles': true, 'cancelable': true }));
                input.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: false, data: " ", inputType: "insertText", which: 0, composed: false }));

                console.log(doc.activeElement)

            }, 15000);
            // }, 5000);
        });
    });
    it('.type() - type into a DOM element', () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });
});

/*
input       = document.querySelector('#side > div._2HS9r > div > label > input');
input.dispatchEvent(new Event('focus', {'bubbles': true, 'cancelable': true }));
input.value = '+51 977 544 773';
input.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: false, data: " ", inputType: "insertText", which: 0, composed: false }));
input.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
input.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
input.dispatchEvent(new KeyboardEvent('keypress', {bubbles: true, cancelable: true, keyCode: 32, which: 32, shiftKey: false, code: "Space", key: " "}));
console.log(document.activeElement);
input.select();
input.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: false, data: " ", inputType: "insertText", which: 0, composed: false }));
//input.dispatchEvent(new Event('blur', {'bubbles': true, 'cancelable': true }));
//input.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 13, which: 13, shiftKey: false, code: "NumpadEnter", key: "Enter"}));
//monitorEvents(input, 'focus')
*/
