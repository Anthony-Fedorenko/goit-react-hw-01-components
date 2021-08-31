import styled from 'styled-components';

const FriendListWrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 15px;
  .friend-list {
    margin: 0 auto;
    width: 300px;
  }
  .item:not(:last-child) {
    margin-bottom: 10px;
  }
`

export default FriendListWrapper;