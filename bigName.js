function bestFriend(arry){
    let friend = arry[0];
    for(let i = 0; i < arry.lenth; i++){
        let element = arry[i];
        if(friend.length > element.length){
            friend = element;
        }
    }
    return friend;
}
const friends = ['Sabbir', 'Nasir', 'dhsjshgdjsdg'];
const finalFriend = bestFriend(friends);
console.log(finalFriend);