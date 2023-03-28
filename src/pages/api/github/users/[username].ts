import type { NextApiRequest, NextApiResponse } from 'next'

const data =  {
  login: 'Henrique0498',
  id: 39716479,
  node_id: 'MDQ6VXNlcjM5NzE2NDc5',
  avatar_url: 'https://avatars.githubusercontent.com/u/39716479?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Henrique0498',
  html_url: 'https://github.com/Henrique0498',
  followers_url: 'https://api.github.com/users/Henrique0498/followers',
  following_url:
    'https://api.github.com/users/Henrique0498/following{/other_user}',
  gists_url: 'https://api.github.com/users/Henrique0498/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/Henrique0498/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/Henrique0498/subscriptions',
  organizations_url: 'https://api.github.com/users/Henrique0498/orgs',
  repos_url: 'https://api.github.com/users/Henrique0498/repos',
  events_url: 'https://api.github.com/users/Henrique0498/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/Henrique0498/received_events',
  type: 'User',
  site_admin: false,
  name: 'Henrique Lopes',
  company: 'Engloba Sistemas',
  blog: '',
  location: 'São Paulo - SP',
  email: 'h.lopes.silva2015@gmail.com',
  hireable: null,
  bio: 'Olá, sou um desenvolvedor Front -End e estudante no curso de ADS na FIAP.',
  twitter_username: null,
  public_repos: 26,
  public_gists: 0,
  followers: 8,
  following: 10,
  created_at: '2018-05-29T01:41:09Z',
  updated_at: '2023-03-28T02:28:32Z'
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof data>
) {
  res.status(200).json(data)
}
