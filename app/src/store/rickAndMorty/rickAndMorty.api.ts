import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Path from '../../base/enums/path';
import ReducerPath from '../../base/enums/reducerPath';
import { Character, RickAndMortyRes } from '../../base/models';

export const rickAndMortyApi = createApi({
  reducerPath: ReducerPath.rickAndMortyApi,
  baseQuery: fetchBaseQuery({
    baseUrl: Path.origin,
  }),
  endpoints: (build) => ({
    searchCharacters: build.query<Character[], string>({
      query: (search: string) => ({
        url: Path.character,
        params: {
          name: search,
        },
      }),
      transformResponse: (res: RickAndMortyRes) => res.results,
    }),
    fetchCharacterById: build.query<Character, number>({
      query: (id: number) => `${Path.character}/${id}`,
    }),
  }),
});
export const {
  useLazySearchCharactersQuery,
  useLazyFetchCharacterByIdQuery,
  useSearchCharactersQuery,
} = rickAndMortyApi;
