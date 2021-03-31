import React, { Component } from "react";
import {getFunName} from "../helpers";


class StorePicker extends Component {
    myInput = React.createRef();

    goToStore = e => {
        e.preventDefault();

        // get the text from input
        const storeName = this.myInput.current.value;

        // change the page to /store/<storename>
        this.props.history.push(`/store/${storeName}/`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store ➡️</button>
            </form>
        );
    }
}

export default StorePicker;