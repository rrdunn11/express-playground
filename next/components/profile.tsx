interface Props {
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number?: string;
  id: number;
}

const Profile =({
  first_name, last_name, email, phone_number,
}: Props) => {
  return (
    <div>
      <span>Profile</span>
      <span>{first_name}</span>
      <span>{last_name}</span>
      <span>{email}</span>
      <span>{phone_number}</span>
    </div>
  );
}

export default Profile;
