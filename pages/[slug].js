export default function draftPage({ content }) {
  console.log(content)
  return (
    <>
      <div>draftPage desu</div>
    </>
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
  const paths = data.contents.map(content => `/${content.id}`);
  return {paths, fallback: true};
};

export const getStaticProps = async (context) => {
  if(context !== undefined ) {
    const slug = context.params.slug
    const draftKey = context.previewData.draftKey
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
  }
  else {
    const slug = ''
    const draftKey = ''
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
  }
  
 }; 