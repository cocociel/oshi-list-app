'use client';
import { useState } from 'react';

export default function AddPage() {

  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('api/oshi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, group, color}),
    });
  };

  return (
    <>
      <p>推しの追加ページです</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="メンバー名" value={name} onChange={e => setName(e.target.value)} type="text" required />
        <input placeholder="グループ名" value={group} onChange={e => setGroup(e.target.value)} type="text" />
        <input placeholder="メンバーカラー" value={color} onChange={e => setColor(e.target.value)} type="text" />
        <button type="submit">追加</button>
      </form>
    </>
  );
}