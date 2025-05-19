import "../styles/listingpagehostinfolargebox.css";

const ListingPageHostInfoLargeBox = ({ user }) => {
  return (
    <div className="listing-page-host-info-large-box-container">
      <div className="listing-page-host-info-large-box">
        <div className="large-section-host-info-content">
          <img className="large-section-host-avatar" src={user.photoUrl} />

          <div className="large-section-host-details">
            <div className="large-section-host-name-details">
              <p  className="large-section-host-name">{user.firstName} {user.lastName}</p>
              <span className="host-contact">Contact</span>
              <div className="host-contact-email"> {user.contactEmail}</div>
              <div className="host-contact-phone-number">{user.contactPhoneNumber}</div>
            </div>
          </div>
        </div>

        <div className="host-bio-section">{user.bio}</div>
      </div>
    </div>
  );
};

export default ListingPageHostInfoLargeBox;
