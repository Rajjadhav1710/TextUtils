import React,{useState} from 'react'

export default function About() {

    const [myStyle,setMyStyle]=useState({});
    const [isDark,setIsDark]=useState(false);

    // let myStyle={
    //     color:'white',
    //     backgroundColor:'black' //properties in camelcase
    // }

    return (
        <div classNameName='container' style={myStyle}>
            <h2 className='mx-3'>About Us</h2>
            <div className="accordion mx-3" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            We Are For Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is one of the most useful website to have fun with your text. we have built this app keeping in mind what people generally wants to do with their text and tried to reduce that manual work as much as we can. we are still improving and adding new features
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className='btn btn-primary my-2' onClick={()=>{
                    if(isDark){
                        setIsDark(false);
                        setMyStyle({});
                    }else{
                        setIsDark(true);
                        setMyStyle({
                            color:'white',
                            backgroundColor:'black',
                            border:'1px solid white'
                        });
                    }
                }}>{isDark?"Enable Light Mode":"Enable dark mode"}</button>
            </div>
        </div>
    )
}
