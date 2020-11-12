import React from "react";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query MyQuery {
  newHomepage(locale: en) {
    id
    logoText
    contentPreviews {
      id
      name
    }
    _seoMetaTags {
      content
    }
    contentPreviewSubtitle
    contentPreviewTitle
    mainSubtitle
    mainTitle
    productsDescription(markdown: false)
    productsTitle
    softwareSections {
      description
    }
    logos {
      name
      url
      logoImage {
        id
      }
    }
  }
}
`;
function DataCmsApi() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
  console.log(data)
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";
  if(data){
    console.log(data.newHomepage.mainTitle)
  }
  return (
    <div>{data.newHomepage.mainTitle}</div>
  );
}
export default DataCmsApi;