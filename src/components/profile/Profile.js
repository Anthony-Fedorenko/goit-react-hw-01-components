import React from 'react'
import PropTypes from 'prop-types'
import ProfileWrapper from './styledProfile'

const Profile = ({ name, tag, location, avatar, stats }) => {
    const {followers, views, likes} = stats
    return (
        <ProfileWrapper>
            <div className='profile'>
                <div className='description'>
                    <img src={avatar} alt='User Avatar' className='avatar'/>
                    <p className='name'>{name}</p>
                    <p className='tag'>@{tag}</p>
                    <p className='location'>{location}</p>
                </div>

                <ul className='stats list'>
                    <li>
                        <span className='label'>Followers</span>
                        <span className='quantity'>{followers}</span>
                    </li>
                    <li>
                        <span className='label'>Views</span>
                        <span className='quantity'>{views}</span>
                    </li>
                    <li>
                        <span className='label'>Likes</span>
                        <span className='quantity'>{likes}</span>
                    </li>
                </ul>
            </div>
        </ProfileWrapper>
    )
}

export default Profile

Profile.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg'
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
}