import query from '.';

export const getPostsByProfileId = ({ profileId }: {profileId: number}) => query('SELECT * FROM posts where profile_fk = $1', [profileId]);

export const getPostById = ({ postId }: {postId: number}) => query('SELECT * FROM posts where id = $1', [postId]);

export const createPost = ({ content, profileId }: {content: string, profileId: number}) => query('INSERT INTO posts (content, profile_fk) VALUES ($1, $2)', [content, profileId]);
