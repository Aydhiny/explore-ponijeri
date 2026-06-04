import ServerSideData from "./ServerSideData";
import ClientSideFilter from "./ClientSideFilter";

export default function Page() {
  const postMetadata = ServerSideData();
  return <ClientSideFilter postsData={postMetadata} />;
}
