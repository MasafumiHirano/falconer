// pages/topics/[id].js
export default function topicId({ topic }) {
  return (
    <main>
      <h1>{topic.title}</h1>
      <p>{topic.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${topic.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/topics/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://falconer.microcms.io/api/v1/topics/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topic: data,
    },
  };
};