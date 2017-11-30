let formChecker = (function(){

    function numbersOnly(testStr){
        let numCheck = /^[0-9]+$/
        if(numCheck.test(testStr)){
            return true;
        }
        return false;
    }

    function charsOnlyTest(testStr){
        let nameCheck = /^[a-zA-z]+$/;
        if(nameCheck.test(testStr)){
            return true;
        }
        return false;
    }

    function postalCodeTest(testStr){
        let postalCheck = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/
        if(postalCheck.test(testStr)){
            return true;
        }
        return false;
    }

    function hasValue(testStr){
        if(testStr!=null && testStr.length>=1){
            return true;
        }
        return false;
    }

    function radioCheckedValue(checkName){
        if(event.target.querySelector(`input[name=${checkName}]:checked`)){
            return event.target.querySelector(`input[name=${checkName}]:checked`).value;
        }
            return null;
    }

    function errorsCheck(valuesList){
        let errors=[];
            valuesList.forEach((item) => {
                if((item.func)(item.val)==false){
                    errors.push(`<p>${item.errMsg}</p>`);
                }
            });
        return errors;
    }

    function canSubmit(errorsList){
        if(errorsList.length>0){
            showErrors(errorsList);
            return false;
        }
        return true;
    }

    function showErrors(errorsList){
        let errorDisplay = event.target.querySelector("#errors");
        errorDisplay.innerHTML=errorsList.join('');
    }

    function checkForm(event){
        event.preventDefault();
        //
        let submitValues = {};
        submitValues.salutation = radioCheckedValue('salutation');
        submitValues.first_name = event.target.querySelector("#firstname").value;
        submitValues.last_name = event.target.querySelector("#lastname").value;
        submitValues.street_address = event.target.querySelector("#street_address").value;
        submitValues.unit = event.target.querySelector("#unit").value;
        submitValues.city = event.target.querySelector("#city").value;
        submitValues.postal_code = event.target.querySelector("#postalcode").value;
        submitValues.province = event.target.querySelector("select[name=province]").value;
        submitValues.instructions  = event.target.querySelector("#instructions").value;
        // https://www.debuggex.com/cheatsheet/regex/javascript
        
        let errorsList = errorsCheck(
            [
                {val:submitValues.salutation, func:hasValue ,errMsg:"Please enter a Saluatation"},
                {val:submitValues.first_name, func:charsOnlyTest, errMsg:"Please enter your first name"},
                {val:submitValues.last_name, func:charsOnlyTest, errMsg:"Please enter your last name"},
                {val:submitValues.street_address, func:hasValue, errMsg:"Please enter a street address"},
                {val:submitValues.city, func:charsOnlyTest, errMsg:"Please enter a city"},
                {val:submitValues.postal_code, func:postalCodeTest, errMsg:"Please enter a postal code"},
                {val:submitValues.province, func:hasValue, errMsg:"please enter a province"}
            ]);
        
        if(canSubmit(errorsList)){
            console.log("I am ready for submit");
            console.table(submitValues);
            event.target.reset();
        }
        
    }
    return {
        initForm: function(userForm){
            userForm.addEventListener("submit", checkForm);
        }    
    }
})();