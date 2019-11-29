import React from 'react';
import './SeasonDisplay.css';

// const seasonConfig = {
//     summer: {
//         text: "Let's hit the beach!",
//         iconName: 'sun'
//     },
//     winter: {
//         text: "Burr, it's too cold!",
//         iconName: 'snowflake'
//     }
// };

//function to determine summer/winter
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return  lat > 0 ? 'winter' : 'summer';
    }
};

// const SeasonDisplay = props => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     const text = season === 'winter' ? <h2 style={{color:'#54dae0'}}>'Burr, I need a jacket!'</h2> : <h2 style={{color:'#ff7070'}}>'Oh its so hot! I need to go to the beach!'</h2>;
//     const icon = season === 'winter' ? 'snowflake' : 'sun';
//     const color = season === 'winter' ? '#2cc7a9' : '#ff6e6e'

//         return ( 
//             <div style={{ padding: 10, fontSize: 40, color: 'gray'}}> 
//                 Season Display -> <i className={`massive ${icon} icon `} color /> 
//                                     <h2 style={{ }}>{text}</h2>
//                                   <i className={`massive ${icon} icon `} color />
//                 </div>
//         )
// }

// const SeasonDisplay = props => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     const { text, iconName } = seasonConfig[season];

//     return (
//             <div className={`season-display ${season}`}> 
//                 <i className={`icon-left massive ${icon} icon `} color /> 
//                     <h2 style={{ }}>{text}</h2>
//                 <i className={`icon-right massive ${icon} icon `} color />
//             </div>
//     )
// }

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? <h2 style={{color:'#54dae0', fontSize: 40 }}>'Burr, I need a jacket!'</h2> : <h2 style={{color:'#fff', fontSize: 40 }}>'Oh its so hot! I need to go to the beach!'</h2>;
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    const color = season === 'winter' ? '#2cc7a9' : '#ff6e6e'

        return ( 
            <div className={`season-display ${season}`}> 
                <i className={`icon-left massive ${icon} icon `} color /> 
                    <h2 style={{ }}>{text}</h2>
                <i className={`icon-right massive ${icon} icon `} color />
            </div>
        )
}

export default SeasonDisplay