"use client"

import { useState, useEffect } from 'react';
import {
  MdLastPage,
  MdFirstPage,
  MdNavigateNext,
  MdNavigateBefore,
  MdOutlineArrowCircleRight,
} from 'react-icons/md';
import Link from 'next/link';
import { capitalizeEachFirstLetter, replaceCharWithSpaces } from './helper';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [meta, setMeta] = useState<{
    count: number,
    nextParams: string,
    prevParams: string,
    offset: number,
    firstData: number,
    lastData: number,
  }>({
    count: 0,
    nextParams: '',
    prevParams: '',
    offset: 0,
    firstData: 0,
    lastData: 0,
  });

  async function fetchList(key: string) {
    const { prevParams, nextParams, count } = meta;
    let queryParams: string = '';

    switch(key) {
      case 'first':
        queryParams = '?limit=20&offset=0';
        break;
      case 'prev':
        queryParams = prevParams;
        break;
      case 'next':
        queryParams = nextParams;
        break;
      case 'last':
        const offset = count - 20;
        queryParams = `?limit=20&offset=${offset}`;
        break;
      default:
        queryParams = '?limit=20&offset=0';
    }

    try {
      const res = await fetch(`/api/pokemon${queryParams}`);
      const data = await res.json();

      const { result: { count, next, previous, results } } = data;
      const params = new URLSearchParams(queryParams);
      const offset: number = Number(params.get('offset'));
      const formattedList = results.map((val: { name: string, url: string }) => ({
        ...val,
        id: val.name,
        name: capitalizeEachFirstLetter(replaceCharWithSpaces(val.name, '-')),
      }));

      setPokemonList(formattedList);
      setMeta((prevState) => ({
        ...prevState,
        count,
        nextParams: next ? new URL(next).search : '',
        prevParams: previous ? new URL(previous).search : '',
        firstData: offset + 1,
        lastData: ((offset / 20 + 1) * 20) < count ? ((offset / 20 + 1) * 20) : count,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList('');
  }, []);

  return (
    <main className="p-4 md:p-8">
      <article className="w-9/12 mx-auto flex flex-col gap-6">
        <section>
          <h1 className="text-center text-xl font-bold lg:text-left">Pokemon List</h1>
        </section>
        <section className="grid lg:grid-cols-2 gap-2">
          {pokemonList.length > 0
            ? (
              pokemonList.map((pokemon, idx) => (
                <Link
                  key={`${pokemon.name}-${idx}`}
                  href={`/pokemon-detail/${pokemon.id}`}
                  className="flex justify-between items-center p-4 border-solid border-4 border-rose-700 rounded-full cursor-pointer hover:backdrop-brightness-95 hover:shadow-md"
                >
                  <p>{pokemon.name}</p>
                  <MdOutlineArrowCircleRight className='text-2xl text-rose-700' />
                </Link>
              ))
            ) : (
              <h1>Fetching data...</h1>
            )
          }
        </section>
        <section className="w-fit mx-auto flex justify-between items-center gap-2">
          <button onClick={() => fetchList('first')} disabled={!meta.prevParams}>
            <MdFirstPage className={`text-3xl ${!meta.prevParams ? 'text-gray-400' : 'hover:text-rose-700'}`} />
          </button>
          <button onClick={() => fetchList('prev')} disabled={!meta.prevParams}>
            <MdNavigateBefore className={`text-3xl ${!meta.prevParams ? 'text-gray-400' : 'hover:text-rose-700'}`} />
          </button>
          <p>{`${meta.firstData}-${meta.lastData} of ${meta.count}`}</p>
          <button onClick={() => fetchList('next')} disabled={!meta.nextParams}>
            <MdNavigateNext className={`text-3xl ${!meta.nextParams ? 'text-gray-400' : 'hover:text-rose-700'}`} />
          </button>
          <button onClick={() => fetchList('last')} disabled={!meta.nextParams}>
            <MdLastPage className={`text-3xl ${!meta.nextParams ? 'text-gray-400' : 'hover:text-rose-700'}`} />
          </button>
        </section>
      </article>
    </main>
  );
};
