import ServerSideData from "./ServerSideData";
import ClientSideFilter from "./ClientSideFilter";
const backgroundImage = new URL("../images/ponijeri.jpg", import.meta.url);

export default function Page() {
  const postMetadata = ServerSideData();

  return (
    <div
      className="w-full h-full cursor-default relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Pass the post data to the client-side component */}
      <ClientSideFilter postsData={postMetadata} />
    </div>
  );
}
