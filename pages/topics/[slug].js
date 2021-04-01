export default function draftPage({ content }) {
  console.log (content)
  return (
    <div>test</div>
  )
};

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
  `https://falconer.microcms.io/api/v1/topics/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
  }`,
  { headers: { 'X-API-KEY': process.env.apiKey || '' } }
  )
  .then((res) => res.json());
  return {
    props: {
      content
    }
  };
};

