import { Component } from "react";
import bag from './bag.png';

/*we will use class components*/

export class Grocerylist extends Component {
                state = {
                        userInput: '', /*input type to see what is user typed*/
                        grocerylist: [] /*list*/
                }

        onChangeEvent (e) {
        this.setState ({userInput: e}); /* binden with what the use typed = click etc, state change*/
}

addItem (input) {
        /*img bag ohne text kann man nicht hinzufügen*/
        if (input === '') {
                alert ("Please enter an Item")
        }
        else {
        let listArray = this.state.grocerylist;
        listArray.push (input);
        this.setState ({grocerylist: listArray, userInput: ''})
        }
}
deleteItem () {
        let listArray = this.state.grocerylist;
        listArray =[]; /* or listArray.lenght = 0;*/
        this.setState({grocerylist: listArray})
}


crossedWord (event) {
        const li = event.target;
        li.classList.toggle ('crossed');
}

/*if i want push the buttonn with Enter*/ 
onFormSubmit (e) {
        e.preventDefault()
}

        render() {
                return(
                        <div>
                                <form onSubmit={this.onFormSubmit} /*if i want push the buttonn with Enter*/ >
                        <div className="container">
                                <input type="text"
                                placeholder ="What do you want to buy today?"
                                onChange ={(e) => {this.onChangeEvent(e.target.value)}}  /*hier I can see how will change input or what user type.*/
                                value = {this.state.userInput}/>
                        </div>
                        <div className="container">
                                <button onClick = {() => this.addItem (this.state.userInput)} className="btn-add">Add</button>
                        </div>

                        {/*ispolzuem metod []map polu4it dostup k kagdomy elements i postavim index 4toby kagdiy element was uniqe*/}
                        <ul>
                        {this.state.grocerylist.map((item, index) => (
                                <li onClick = {this.crossedWord}key={index}>
                                        <img src={bag} width="40px" alt="bag"/>
                                        {item}
                                </li>
                        ))}
                        </ul>
                        <div className="container">
                        <button onClick = {() => this.deleteItem (this.state.userInput)} className="btn-delete">Delete</button>
                        </div>
                        </form>
                        </div>

                )
        }
}
