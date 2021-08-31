import React from "react";
import PropTypes from 'prop-types'
import LiItem from './styledFriendListItem';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? 'status online' : 'status offline'

    return (
        <LiItem className='item'>
            <span className={status}></span>
            <img className='avatar' src={avatar} alt={name} width='48' />
            <p className='name'>{name}</p>
        </LiItem>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}