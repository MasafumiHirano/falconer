export default async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://falconer.microcms.io/api/v1/topics/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-API-KEY': process.env.api_key || '' } }
  )
  .then(res => res.json()).catch(error => null);

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end('Preview mode enabled');

  // シークレットトークンと次のパラメーターを確認してください。
  // このシークレットトークンはAPIルートとCMSだけが知っている必要があります。
  // if (req.query.draftKey !== 'MY_SECRET_TOKEN' || !req.query.slug) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // // 提供された `slug` が存在しているかどうか確認するため、ヘッドレスCMSをフェッチします。
  // // getPostBySlugはヘッドレスCMSへの必要なフェッチロジックを実装します。
  // const post = await getPostBySlug(req.query.slug)

  // // slugが存在しない場合、プレビューモードを有効にしないようにしましょう。
  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' })
  // }

  // // Cookiesを設定し、プレビューモードを有効にします。
  // res.setPreviewData({})

  // // フェッチされた投稿にパスをリダイレクトします。
  // // オープンリダイレクトの脆弱性につながる可能性があるため、req.query.slugにリダイレクトしません。
  // res.redirect(post.slug)
}