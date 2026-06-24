import { getBlogPosts } from "@/lib/api";
import { BlogPost } from "@/types/api";

export const blogService = {
  async getPosts(): Promise<BlogPost[]> {
    try {
      const posts = await getBlogPosts();
      return posts;
    } catch (error) {
      console.error("Blog posts fetch error:", error);
      return [];
    }
  },
};
