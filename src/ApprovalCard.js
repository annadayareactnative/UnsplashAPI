// import React from 'react';


// const ApprovalCard = (props) => {
//     return (
//         <div className="ui card">
//             <div className="content">{props.children}</div>
//                 <div className="extra content">
//                     <div className="ui two buttons">
//                         <div className="ui basic green button"> Approve </div>
//                         <div className="ui basic red button">  Reject </div>
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default ApprovalCard;


/*

An example of wrapping components with just one style to recycle/reuse 

const Segment = (props) => {
    return <div className="ui placeholder segment">{props.children}</div>
};

so wrap the compent we can just wrap them with Segment instead of rewriting the styles over and over.

<Segment>
    <Component />
<Segment>

<Segment>
    <Component />
<Segment>

<Segment>
    <Component />
<Segment>


*/