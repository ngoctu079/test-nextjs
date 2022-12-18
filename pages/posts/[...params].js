import { useRouter } from "next/router";

export default function ParamsPage() {
  const router = useRouter();

  return <div>Params Page {JSON.stringify(router.query)}</div>;
}
