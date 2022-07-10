import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";
import { useRouter } from "next/router";

// our-domain.com/news

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backendAPI
  // to fetch the news item with newsId

  return <h1>The DetailPage Page</h1>;
}

export default DetailPage;
