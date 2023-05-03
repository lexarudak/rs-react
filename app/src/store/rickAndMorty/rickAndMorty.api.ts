import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Path, ReducerPath, Character, RickAndMortyRes } from 'models';

import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

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
