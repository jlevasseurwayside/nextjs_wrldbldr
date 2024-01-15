import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";

import Layout from "../layout";
import Error from "~/components/Error";

export default function WorldPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <Error />;

  const { data: worldData } = trpc.world.getById.useQuery({ id: +id });

  if (!worldData) return <Error />;

  return (
    <Layout>
      <h1>{worldData.seed}</h1>
    </Layout>
  );
}
