"use client"

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Profile from '../components/Profile';
import BaseStatus from '../components/BaseStatus';
import Abilities from '../components/Abilities';
import Sprites from '../components/Sprites';
import GameIndices from '../components/Indices';
import Divider from '@/app/components/Divider';
import { formatDetailData } from '../helper';

export default function PokemonDetail({ params }: {
  params: { pokemonId: string }
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detailData, setDetailData] = useState<any>(null);
  const { pokemonId } = params;

  async function getPokemonDetail() {
    try {
      const res = await fetch(`/api/pokemon-detail/${pokemonId}`);
      const data = await res.json();
      const { result } = data;

      const formattedDetail = formatDetailData(result);
      setDetailData(formattedDetail);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8">
      <section className="w-10/12 mx-auto flex flex-col gap-6">
      {isLoading ? (
        <h1 className='text-center'>Fetching data...</h1>
      ) : (
        <Fragment>
          <section className='w-full md:w-72 mx-auto flex flex-col gap-4 p-4 border-solid border-2 border-rose-700 rounded-md'>
            <h1 className='text-center text-lg font-bold'>{detailData.name}</h1>
            <div className='w-full'>
              <Image
                src={detailData.image}
                alt={detailData.name}
                width={300}
                height={300}
                className='mx-auto'
              />
              <Divider />
              <Profile data={detailData} />
              <Divider />
              <BaseStatus data={detailData} />
            </div>
          </section>
          {detailData.abilities ? <Abilities data={detailData} /> : null}
          <Sprites data={detailData} />
          <GameIndices data={detailData} />
        </Fragment>
      )}
      </section>
    </main>
  );
};
