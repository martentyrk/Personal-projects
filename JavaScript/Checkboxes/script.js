const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheckbox;
let oneChecked;
function handleCheck(e) {

    //Check if shift key is down AND if check is being checked.
    let inBetween = false;
    if((e.shiftKey && this.checked === true) && oneChecked === true) {
        console.log('jah')
        boxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastCheckbox) {
                inBetween = !inBetween;
                console.log(this);
            }

            if(inBetween) {
                checkbox.checked = true;
            }
            
        });
        
    }
    if(this.checked === false) {
        lastCheckbox = '';
        console.log('123');
        oneChecked = false;
    } else {
        lastCheckbox = this;
        oneChecked = true;
        console.log(oneChecked);
    }
}

boxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
