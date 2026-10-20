// import { useState } from "react";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { IoEyeSharp } from "react-icons/io5";
// export default function BackgroundColor() {
//   const [text, setText] = useState("*********");
//   const [visible, setVisible] = useState(false)
//   return (
//     <div className="main">
//       <p>{text}</p>
//       <div onClick={() => setVisible(!visible)}>
//         {
//           visible ? <AiFillEyeInvisible onClick={() => setText("*********")} />  : <IoEyeSharp onClick={() => setText("Developer")} />
//         }
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { FcLikePlaceholder, FcLike } from "react-icons/fc";

// export default function BackgroundColor() {

//   const [like, setLike] = useState(false)
//   return (
//     <div className="main">

//       <div onClick={() => setLike(!like)}>
//         {like ? <FcLike /> :   <FcLikePlaceholder />}
//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";

// export default function BackgroundColor() {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <div className="main" style={{backgroundColor: darkMode ? 'black' : 'white'}}>
//       <div onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? <CiLight  className="icon light"/> : <MdDarkMode  className="icon dark"/> }
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function BackgroundColor() {
//   const [text, setText] = useState(false)
//   return (
//     <div className="main" >
//       <h2 style={{textDecoration: text? 'line-through' : 'none'}}>Uyga vazifani bajarish</h2>
//       <button onClick={()=> setText(!text)}>Complited</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function BackgroundColor() {
//   const [color, setColor] = useState('white');

//   return (
//     <div className="parent">
//       <select value={color} onChange={(e) => setColor(e.target.value) }>
//         <option value="white">white</option>
//         <option value="red">Red</option>
//         <option value="blue">Blue</option>
//         <option value="yellow">Yellow</option>
//         <option value="green">Green</option>
//       </select>
//       <div style={{backgroundColor: color}} className="main"></div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function BackgroundColor() {
// const [name, setName] = useState("")

//   return (
//     <div className="main">
//       <input type="text"  placeholder="enter your name..." value={name} onChange={(e) => setName(e.target.value) }/>
//       {
//         <h2>Salom {name}!</h2>
//       }
//     </div>
//   );
// }


// import { useState } from "react";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { IoEyeSharp } from "react-icons/io5";

// export default function BackgroundColor() {
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className="main">
//       {/* <input type="text"  placeholder="enter your password..." value={password} onChange={(e) => setPassword(e.target.value) }/> */}
//       <div className="div">
//         <input type="password" />
//         <div onClick={() => setVisible(!visible)}>
//           {visible ? (
//             <AiFillEyeInvisible onClick={() => setPassword("*********")} />
//           ) : (
//             <IoEyeSharp onChange={(a) => setPassword()} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
