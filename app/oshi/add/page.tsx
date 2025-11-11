export default function AddPage() {
  return (
    <>
      <p>推しの追加ページです</p>
      <form action="POST">
        <label htmlFor="name">
          メンバー名：<input type="text" name="name" />
        </label>
        <label htmlFor="group">
          グループ名：<input type="text" name="group" />
        </label>
        <label htmlFor="color">
          メンバーカラー：<input type="text" name="color" />
        </label>
      </form>
      <button type="submit">登録</button>
    </>
  );
}