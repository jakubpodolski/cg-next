
const rootApiPath = "https://swapi.dev/api";

export class SwapiClient {

  public static getStarships = (): Promise<any> => {
    return fetch(`${rootApiPath}/starships`).then(res => res.json())
  }

  public static getStarshipById = (id: number): Promise<any> => {
    return fetch(`${rootApiPath}/starships/${id}`).then(res => res.json())
  }
}
