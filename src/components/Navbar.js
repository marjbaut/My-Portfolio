import React from "react";

export default function Navbar() {
  return (

    <nav className=" container-fluid navBG nav-container flex-wrap d-flex justify-content-center ">
        {/* <div className=" title " href="#">M B</div> */}
        <img className="" src='  https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif' style={{ width: 120, height: 120 }}/>

        <div className="align-items-center" id="navbarNav">
          <ul className="nav d-flex justify-content-around " >
            <li className="nav-item flex-wrap ">
              <a className="nav-link navcolor fs-3" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item flex-wrap">
              <a className="nav-link navcolor fs-3 " href="#">ABOUT</a>
            </li>
            <li className="nav-item  flex-wrap">
              <a className="nav-link navcolor fs-3 " href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item flex-wrap ">
              <a className="nav-link navcolor fs-3 ">CONTACT</a>
            </li>
          </ul>
        </div>
  
    </nav>
    // <nav style={style.container1}>
    //     <div style={style.row1}>
    //         {/* <div style={style.col1}>
    //             <a style={style.a} > Marjorie Bautista </a>
    //         </div> */}
    //         <div style={style.col2}>
    //             <a style={style.a}  href="#">Active</a>
    //             <a style={style.a}  href="#">Link</a>
    //             <a style={style.a} className="nav-link" href="#">Link</a>
    //             <a style={style.a} className="nav-link ">Disabled</a>
    //         </div>
    //     </div>
    // </nav>
  );
};