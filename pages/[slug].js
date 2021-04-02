export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const draftKey = context.previewData.draftKey;
  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  };

  const content = await fetch(
   `https://falconer.microcms.io/api/v1/topics/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
   }`, key)
    .then((res) => res.json());

   return {
     props: {
       content
     }
   };
 };

 export const getStaticPaths = async (context) => {
  const slug = context.params.slug
  const draftKey = context.previewData.draftKey
  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  };
  const data = await fetch(`https://falconer.microcms.io/api/v1/topics/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
   }`, key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/${content.id}`);
  return {paths, fallback: true};
};