'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function OshiListPage() {

  const router = useRouter();

  const oshis = [
    {id: '1', name: 'ロゼ', group: 'めておら', color: '赤色'},
    {id: '2', name: '明雷らいと', group: 'めておら', color: '黄色'},
    {id: '3', name: 'みかさくん', group: 'めておら', color: 'ピンク色'}
  ];
  
  return (
    <>
      <h1>推しのリスト管理</h1>
      <p>あなたの推しの情報を管理しましょう</p>

      <div>
        <p>推し一覧</p>
        {oshis.map(o => (
            <div key={o.id}>
              <Link href={`/oshi/${o.id}`}>メンバー名：{o.name}</Link>
              <p>グループ名：{o.group}</p>
              <p>メンバーカラー：{o.color}</p>
            </div>
          ))
        }
        <button onClick={() => router.push('/oshi/add')}>追加</button>
      </div>
    </>
  );
}