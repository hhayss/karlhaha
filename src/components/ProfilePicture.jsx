import karlImg from '../assets/karl.jpg';

function ProfilePicture() {
  return (
    <div>
      <img src={karlImg} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
    </div>
  );
}
export default ProfilePicture;
