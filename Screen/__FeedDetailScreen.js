// import React from 'react';
// import {Text, View, TouchableOpacity} from 'react-native';


// export default function FeedItem (
//     {
//         Id,
//         text,
//         date
//     }
// ) 
// {   
//     const feedType = (id) => {
//         if(id == "1") return "(My)"
//         else return "(All)"
//     }

//     return (
//     <View 
//         style={{
//             marginBottom: 30,
//             height: 120,
//             justifyContent: "center",
//             borderRadius: 25,
//             paddingLeft: 10,
//             backgroundColor: "ivory",
//         }}
//     >
//         <TouchableOpacity>
//             <Text>{feedType(Id)}</Text>
//             <Text>{text}</Text>
//             <Text
//                 style={{
//                     paddingTop: 5,
//                     color: "gray"
//                 }}
//             >
//                 {date}
//             </Text>
//         </TouchableOpacity> 
//     </View>
//     );
// }