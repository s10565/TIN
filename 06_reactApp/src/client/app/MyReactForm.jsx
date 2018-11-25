import React from 'react';
import TextBuilder from './TextBuilder.jsx';
import LabelBuilder from './LabelBuilder.jsx';

var nameValid = "";
var phoneValid = "";
var mailValid = "";
var formValid = "Dane w formularzu nieprawidłowe!";
var r = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

class MyReactForm extends React.Component {
	
    constructor(props){
        super(props);
        this.state = {
            name : "",
            phone: "",
			mail: ""
        }
    }

    stringHandleChange(event) { 
		this.setState({name: event.target.value})
		
        if(event.target.value == ""){
			nameValid = 'Imię nie może być puste';
		}else{
			nameValid = 'OK';
		}
		
		this.isFormValid();
    }
	
    numberHandleChange(event) { 
        this.setState({phone: event.target.value})
		
		if (isNaN(event.target.value)) {
			phoneValid = 'Numer telefonu powinien być liczbą';
		}else{
			if (Number(event.target.value) <= 0) {
				phoneValid = 'Numer telefonu powinien być liczbą dodatnią';
			}else{
				if(event.target.value.length != 9){
					phoneValid = 'Numer telefonu powinien mieć 9 znaków';
				}else{
				phoneValid = 'OK';
				}
			}
		}
		
		this.isFormValid();
	}
	
	mailHandleChange(event) { 
        this.setState({mail: event.target.value})
		
		if (!r.test(event.target.value)){
			mailValid = 'Niepoprawny adres mailowy!';
		}else{
			mailValid = 'OK';
		}
		
		this.isFormValid();
    }
	
	isFormValid(){
		
		if(mailValid != "OK"){
			formValid = "Dane w formularzu nieprawidłowe!";
		}else{
			if(phoneValid != "OK"){
				formValid = "Dane w formularzu nieprawidłowe!";
			}else{
				if(mailValid != "OK"){
					formValid = "Dane w formularzu nieprawidłowe!";
				}else{
					formValid = "Dane w formularzu prawidłowe!";
				}
			}
		}
	}

    render() { 
        return <div>
            <form>
                name: <input type="text" name="name" value={this.state.name} onChange={this.stringHandleChange.bind(this)}></input>
				<LabelBuilder labelName={nameValid} /><br/>
                phone: <input type="number" name="phone" value={this.state.phone} onChange={this.numberHandleChange.bind(this)}></input>
				<LabelBuilder labelName={phoneValid} /><br/>
				mail: <input type="mail" name="mail" value={this.state.mail} onChange={this.mailHandleChange.bind(this)}></input>
				<LabelBuilder labelName={mailValid} /><br/>
				<TextBuilder input={formValid} />
            </form>
            </div>
    }
}
    
export default MyReactForm;

