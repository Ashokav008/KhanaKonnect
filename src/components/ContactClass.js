// import React from "react";
// import { json } from "react-router-dom";
// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {},
//     };
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Interval is CLeared as Component Will UnMoint");
//   }

//   async componentDidMount() {
//     //Make an API Call
//     const data = await fetch("https://api.github.com/users/ashokav008");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     });
//     this.timer = setInterval(() => {
//       console.log("Interval is Running in CDM");
//     }, 1000);
//   }

//   render() {
//     return (
//       <>
//         <h3>------------------------</h3>
//         {/* console.log({this.props}); */}
//         <h1>Heading from Contact</h1>
//         <h2>Name is {this.props.name}</h2>
//         <h2>Name is is {this.state.userInfo.name}</h2>
//         <h2>Location is {this.state.userInfo.location}</h2>
//         <h2>Location is {this.state.userInfo.location}</h2>
//         <img src={this.state.userInfo.avatar_url} alt="" />
//         <h3>------------------------</h3>
//       </>
//     );
//   }
// }
// export default Contact;
