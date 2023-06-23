import React, {Component, useState} from "react";

// export default class Greeting extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: window.localStorage.getItem("classFirstName") || '',
//             lastName: window.localStorage.getItem("classLastName") || '',
//         };
//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         this.handleLastNameChange = this.handleLastNameChange.bind(this);
//     }
//
//     handleFirstNameChange = (e) => this.setState({firstName: e.target.value});
//     handleLastNameChange = (e) => this.setState({lastName: e.target.value});
//
//     componentDidUpdate() {
//         window.localStorage.setItem("classFirstName", this.state.firstName);
//         window.localStorage.setItem("classLastName", this.state.lastName);
//     }
//
//     render() {
//         return (
//             <div>
//                 <input
//                     value={this.state.firCount}
//                     onChange={this.handleFirstNameChange}
//                 />
//                 <br/>
//                 <input
//                     value={this.state.lastName}
//                     onChange={this.handleLastNameChange}
//                 />
//                 <p>
//                     Hello {' '}
//                     <span>
//                        {this.state.firstName}{this.state.lastName}
//                    </span>
//
//                 </p>
//             </div>
//         );
//     }
// }
export default function Greeting() {
    const [fistName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    return(
        <>
        <input
        value={fistName}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <br />
        <input
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        />
        <p>
            Hello {' '}
            <span>
                {fistName}{lastName}
            </span>
        </p>
        </>
    )

}