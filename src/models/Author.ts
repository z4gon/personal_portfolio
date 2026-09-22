export type Author = {
  username: string
  pictureUrl: string
  profileUrl: string
}

export const getUser = (username: string): Author => ({
  username,
  pictureUrl: `https://github.com/${username}.png`,
  profileUrl: `https://github.com/${username}`,
})
