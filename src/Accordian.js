// import { useState } from "react";

// export default function Accordian(props) {
//   const [show, setShow] = useState([true, false, false]);
//   function handleShow(id) {
//     let newShow = [...show];
//     newShow = newShow.map((item) => false);
//     newShow[id] = !newShow[id];

//     setShow(newShow);
//   }
//   return (
//     <div>
//       <h1>Accordian Panel</h1>
//       <div>
//         {props.InitialItems.map((item) => {
//           return (
//             <div style={{ border: "1px solid gray", textAlign: "left", padding:"10px 20px" }}>
//               <h2>{item.name}</h2>
//               <input
//                 type="radio"
//                 name="accordian"
//                 id={item.id}
//                 style={{ display: "none" }}
//               ></input>
//               {!show[item.id] && (
//                 <button onClick={() => handleShow(item.id)}>
//                   show content
//                 </button>
//               )}
//               {show[item.id] && (
//                 <label for={item.id}>{<p>{item.content}</p>}</label>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function Accordian(props) {
  const [showId, setShow] = useState(0);
  function handleShow(id) {
    setShow(id);
  }
  return (
    <div>
      <h1>Accordian Panel</h1>
      <div>
        {props.InitialItems.map((item) => {
          return (
            <div
              style={{
                border: "1px solid gray",
                textAlign: "left",
                padding: "10px 20px"
              }}
            >
              <h2>{item.name}</h2>

              {showId !== item.id && (
                <button onClick={() => handleShow(item.id)}>
                  show content
                </button>
              )}
              {showId === item.id && <p>{item.content}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
