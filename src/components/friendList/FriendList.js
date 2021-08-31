import React from "react";
import PropTypes from 'prop-types'
import FriendListWrapper from './styledFriendList'
import FriendlistItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
       <FriendListWrapper>
           <ul className='friend-list'>
               {friends.map(friend => (<FriendlistItem {...friend} key={friend.id} />))}
           </ul>
       </FriendListWrapper>
    )
}

export default FriendList

FriendList.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.object)
}