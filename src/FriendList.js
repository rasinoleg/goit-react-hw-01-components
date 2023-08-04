import FriendListItem from "FriendListItem";
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend, i) => (
        <FriendListItem
          key={i}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
export default FriendList;

