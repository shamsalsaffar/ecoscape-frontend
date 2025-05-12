import "../styles/ListingPageHostInfoSmallBox.css";

const ListingPageHostInfoSmallBox = ({ user }) => {
  return (
    <>
      <div className="listing-page-host-info-small-box">
        <img className="host-avatar" src={user.photoUrl} />

        <div className="host-name">
          <p className="listed-by">Listed By:</p>
          {user.firstName} {user.lastName}
        </div>
      </div>
    </>
  );
};

export default ListingPageHostInfoSmallBox;
