const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
 
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// class App extends React.Component {
//     handleGenderSelection = (gender) => {
//         alert(`You selected ${gender}`);
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="logo">
//                     Your Best Friend
//                 </div>
//                 <div className="figure-container">
//                     <div className="figure"></div>
//                     <div className="message">
//                         For now, we only have a limited choice for the figure, but we're working on a customizable one.
//                     </div>
//                     <div className="gender-buttons">
//                         <button 
//                             className="gender-button" 
//                             onClick={() => this.handleGenderSelection('Female')}
//                         >
//                             Female
//                         </button>
//                         <div className="arrow arrow-left"></div>
//                         <button 
//                             className="gender-button" 
//                             onClick={() => this.handleGenderSelection('Male')}
//                         >
//                             Male
//                         </button>
//                         <div className="arrow arrow-right"></div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));
