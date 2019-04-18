import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import index from "./index.css"




  class App extends React.Component {
      state = {
            ingredient:[]
        };

    
 


    clickedIngredients = (e) => {
        e.preventDefault();
        console.log(e.target.id)

        var ingredient="";

        switch(e.target.id) {
            case "paprika":
            ingredient= "paprika";
            console.log("yoo")
            break;
             case "gehakt":
            ingredient= "gehakt";
            break; 
            case "sourCream":
            ingredient= "sourCream";
            break;
            case "guacamole":
            ingredient= "guacamole";
            break; 
            case "rundsvlees":
            ingredient= "rundsvlees";
            break;
            case "tomaat":
            ingredient= "tomaat";
            break;
            case "sla":
            ingredient= "sla" ;
            break;
        }

        var stateIngredient = this.state.ingredient
        stateIngredient.push(ingredient)

        console.log(ingredient)

        this.setState({
         ingredient: stateIngredient
        })
        // console.log(this.state.ingredient)
    }

    render(){
        return (
            <div>
                <Header />
                <h1>Wat wil je op jouw tortilla?</h1>
                <div className="mainTortilla"><img alt="" src='./assets/tortilla.jpg' /></div>
                <ul>
                <li id="paprika" onClick={this.clickedIngredients}>Paprika's 1€</li>
                <li id="gehakt" onClick={this.clickedIngredients}>Gehakt 3€</li>
                <li id="sourCream" onClick={this.clickedIngredients}>Zure room 1€</li>
                <li id="guacamole" onClick={this.clickedIngredients}>Guacamole 1€</li>
                <li id="rundsvlees" onClick={this.clickedIngredients}>Rundsvlees 3€</li>
                <li id="tomaat" onClick={this.clickedIngredients}>Tomaat 0,5€</li>
                <li id="sla"  onClick={this.clickedIngredients}>Sla 0,5€</li>
                </ul> 
                <Footer />
            </div>)
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'));
 