const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

type CommentItem = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

const getData = (url: string): Promise<Response> => {
    return fetch(url);
};

getData(COMMENTS_URL).then(async (data) => {
    const array = (await data.json()) as [];
    array.forEach((comment) => {
        const item: CommentItem = comment as CommentItem;
        console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
