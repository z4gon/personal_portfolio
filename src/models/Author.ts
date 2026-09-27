export type Author = {
  name: string
  username: string
  pictureUrl: string
  profileUrl: string
}

export const getUser = (username: string): Author => ({
  name: username,
  username,
  pictureUrl: `https://github.com/${username}.png`,
  profileUrl: `https://github.com/${username}`,
})
