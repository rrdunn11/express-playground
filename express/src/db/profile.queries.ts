import query from '.';

export const createNewProfile = async ({
  email, firstName, lastName, phoneNumber,
}: {email: string; firstName: string; lastName:string; phoneNumber:string}) => query('INSERT INTO profiles (email, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4)', [email, firstName, lastName, phoneNumber]);
export const getProfileById = async ({ id }: {id: number}) => query('SELECT * FROM profiles WHERE id=$1', [id]);
export const getProfileByEmail = async ({ email }: {email: string}) => query('SELECT * FROM profiles WHERE email=$1', [email]);
export const patchProfileEmailById = async ({ id, columnValue }: {id: number; columnValue: string}) => query('UPDATE profiles SET email = $1 WHERE id = $2', [columnValue, id]);
export const patchProfilePhoneNumberById = async ({ id, columnValue }: {id: number; columnValue: string}) => query('UPDATE profiles SET phone_number = $1 WHERE id = $2', [columnValue, id]);
export const patchProfileFirstNameById = async ({ id, columnValue }: {id: number; columnValue: string}) => query('UPDATE profiles SET first_name = $1 WHERE id = $2', [columnValue, id]);
export const patchProfileLastNameById = async ({ id, columnValue }: {id: number; columnValue: string}) => query('UPDATE profiles SET last_name = $1 WHERE id = $2', [columnValue, id]);
