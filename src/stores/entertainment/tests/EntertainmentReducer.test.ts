import entertainmentReducer from "../EntertainmentReducer";

describe("entertainmentReducer test", () => {
  it("returns the initial state", () => {
    expect(entertainmentReducer(undefined, { type: "" })).toEqual({
      entities: {
        "entertainment-headline-1": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 1",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 1",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-2": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 2",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 2",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-3": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 3",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 3",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-4": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 4",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 4",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-5": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 5",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 5",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-6": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 6",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 6",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-7": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 7",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 7",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-8": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 8",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 8",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "entertainment-headline-9": {
          author: "",
          content: "",
          description: "Subtitle of entertainment headline 9",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "ENTERTAINMENT HEADLINE 9",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
      },
    });
  });
});
