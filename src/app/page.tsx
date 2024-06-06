import Container from "@/app/_components/container";
import { Stories } from "@/app/_components/stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        {allPosts.length > 0 && <Stories posts={allPosts} />}
      </Container>
    </main>
  );
}
