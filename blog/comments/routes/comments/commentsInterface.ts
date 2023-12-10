interface Comments {
    postID?: string;
    comments?: CommentsDetails[];
};

interface CommentsDetails {
    id?: string;
    content?: string;
}

export default Comments;