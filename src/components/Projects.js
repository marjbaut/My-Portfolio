import React from "react";

export default function Projects({ projectData }) {


    return (
        <div id='projectId'>
            <header className="container projectBox d-flex  flex-wrap">
            <img className="col-5" src='https://media.giphy.com/media/zbMRZx113HKBkeCwrm/giphy.gif' style={{ width: 150, height: 150 }}/>

            <h1 className="col-7 text-center projTitle  "> Projects: </h1>           
    
            </header>

            <div className="container text-center">
                {projectData.map((data) => (

                    <div className="d-flex pb-5 ">
                        
                        <div className="projName col-4 col-sm-4  d-flex justify-content-center ">
                            {`${data.name}`}
                        </div>

                        <ul className="projDes col-4 col-sm-4  d-flex p-2">
                           <p>{`${data.description}`}
                            </p> 
                        </ul  >
                        <a className="projD d-flex text-center text-align-center" href={`${data.link}`}>
                            Click here to see the repo
                        {/* <img className={`${data.image} projImg `}  alt="" /> */}
                        </a>
                        



                    </div>
                ))}
            </div>

        </div>
    );
}

