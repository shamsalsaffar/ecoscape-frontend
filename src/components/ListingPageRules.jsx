import ClockIcon from "../icons/ClockIcon";
import SmokingPolicyIcon from "../icons/SmokingPolicyIcon";
import NotPermitted from "../icons/NotPermitred";
import Permitted from "../icons/Permitted";
import PartyPolicyIcon from "../icons/PartyPolicyIcon";
import LoudMusicPolicy from "../icons/LoudMusicPolicy";
import PetPolicy from "../icons/PetPolicy";
import SelfCheckInPolicyIcon from "../icons/SelfCheckInPolicyIcon";
import IdRequirement from "../icons/IdRequirement";


const ListingPageRules = ({ listing }) => {
    console.log('isIdRequiredUponCheckin:', listing.rules.isIdRequiredUponCheckin);
    console.log('listing.rules:', listing.rules);


  return (
    <>
      <div className="listing-page-rules">
        <h3 className="rules-heading">Rules</h3>
        {listing.rules.rulesText}
      </div>

      <div className="rules-icons">
        <div className="check-in-time-icon">
          <ClockIcon />
          <span>{listing.rules.checkInTime}Check In</span>
        </div>

        <div className="check-out-time-icon">
          <ClockIcon />
          <span>{listing.rules.checkOutTime}Check Out</span>
        </div>

        {listing.rules.quiteHoursStart != null && (
  <div className="quiet-hours-start-icon">
    <ClockIcon />
    <span>{listing.rules.quiteHoursStart} Quiet Hours Start</span>
  </div>
)}

{listing.rules.quiteQuiteHoursStop != null && (
  <div className="quiet-hours-end-icon">
    <ClockIcon />
    <span>{listing.rules.quiteQuiteHoursStop} Quiet Hours End</span>
  </div>
)}


   
{listing.rules.isSmokingAllowed != null && (
  <div className="smoking-policy-icon">
    <SmokingPolicyIcon />
    <span>Smoking</span>
    {listing.rules.isSmokingAllowed ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}

{listing.rules.isPartyingAllowed != null && (
  <div className="party-policy-icon">
    <PartyPolicyIcon />
    <span>Party</span>
    {listing.rules.isPartyingAllowed ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}

{listing.rules.isLoudMusicAllowed != null && (
  <div className="loud-music-policy-icon">
    <LoudMusicPolicy />
    <span>Loud Music</span>
    {listing.rules.isLoudMusicAllowed ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}

{listing.rules.isPetsAllowed != null && (
  <div className="pet-policy-icon">
    <PetPolicy />
    <span>Pets Allowed</span>
    {listing.rules.isPetsAllowed ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}

{listing.rules.isSelfCheckingPossible != null && (
  <div className="self-checkin-policy-icon">
    <SelfCheckInPolicyIcon />
    <span>Self Check-in</span>
    {listing.rules.isSelfCheckingPossible ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}


{listing.rules?.isIdRequiredUponCheckIn !== undefined && ( //behövde kolla om defined, annars ville inte visas
  <div className="id-requirement-icon">
    <IdRequirement />
    <span>Id required</span>
    {listing.rules.isIdRequiredUponCheckIn ? (
      <Permitted />
    ) : (
      <NotPermitted />
    )}
  </div>
)}




      </div>
    </>
  );
};
export default ListingPageRules;
