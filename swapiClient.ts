
const rootApiPath = "https://swapi.dev/api";

export class SwapiClient {

  public static getStarships = (): Promise<any> => {
    const data = fetch(`${rootApiPath}/starships`)
      .then(res => res.json())
      .then(res => {

        return res.results.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
          id: ship.url.split('/').reverse()[1]
        }))
      });

      return data;
  }

  public static getStarshipById = (id: number): Promise<any> => {
    const data = fetch(`${rootApiPath}/starships/${id}`)
      .then(res => res.json())
      .then(res => {
        return {
          name: res.name, 
          model: res.model, 
          manufacturer: res.manufacturer,
          cost: res.cost_in_credits, 
          length: res.length, 
          maxSpeed: res.max_atmosphering_speed, 
          cargoCapacity: res.cargo_capacity, 
        }
      });

      return data;
  }
}
