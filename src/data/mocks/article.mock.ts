import { ArticleResponse } from "@/types/article.types";

export const MOCK_ARTICLE_RESPONSE: ArticleResponse = {
  article: {
    slug: "discover-bondar-academy",
    title: "MOCKED: Playwright Automation Masterclass",
    description: "Learn how to build enterprise frameworks.",
    body: "This body text was intercepted and modified via Playwright network mocking.",
    tagList: ["automation", "playwright"],
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    favorited: false,
    favoritesCount: 150,
    author: {
      username: "AutomationExpert",
      bio: "Framework Architect",
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
      following: false,
    },
  },
};
