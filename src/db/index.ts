import { JSONPreset } from "lowdb/node";

type Data = {
  posts: string[];
};
async function main() {
  // Read or create db.json

  const defaultData: Data = { posts: [] };
  const db = await JSONPreset<Data>("db.json", defaultData);

  // Create and query items using plain JavaScript
  db.data.posts.push("hello world");
  const firstPost = db.data.posts[0];

  // If you don't want to type db.data everytime, you can use destructuring assignment
  const { posts } = db.data;
  posts.push("hello world");
}

main();
