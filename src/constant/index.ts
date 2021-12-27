export const BASEURL_ENDPOINT = "https://api.sampleapis.com/futurama/";

export const PATH_TYPE = {
  info: 'INFO',
  characters: "CHARACTERS",
  cast: "CAST",
  episodes: "EPISODES",
  questions: "QUESTIONS",
  inventory: "INVENTORY"
}

export const ROUTES = [
  {
    path: '/info',
    id: 0,
    label: PATH_TYPE.info,
  },
  {
    path: '/character',
    id: 1,
    label: PATH_TYPE.characters,
  },
  {
    path: '/cast',
    id: 2,
    label: PATH_TYPE.cast,
  },
  {
    path: '/episodes',
    id: 3,
    label: PATH_TYPE.episodes,
  },
  {
    path: '/questions',
    id: 4,
    label: PATH_TYPE.questions,
  },
  {
    path: '/inventory',
    id: 5,
    label: PATH_TYPE.inventory,
  },
]