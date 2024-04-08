import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))

  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function Meeting({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Button>Meeting Room#: {params.id}</Button>
    </main>
  );
}
