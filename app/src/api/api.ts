import CharacterSearchParam from '../base/enums/params';
import Path from '../base/enums/path';
import { Character, CharacterResp } from '../base/types';

class Api {
  public static async getAllCharactersByParam(
    paramName: CharacterSearchParam,
    paramValue: string
  ): Promise<Character[]> {
    const res = await fetch(`${Path.origin}${Path.character}/?${paramName}=${paramValue}`);
    if (res.ok) {
      const data: CharacterResp = await res.json();
      return data.results;
    }
    return [];
  }
}

export default Api;
